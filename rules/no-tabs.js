/**
 * @fileoverview no tabs
 * inspire by rules/no-trailing-spaces and https://github.com/gyandeeps/eslint-plugin-ideal no-tabs-in-file
 * @author molee1905
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    create: function (context) {
        var sourceCode = context.getSourceCode();

        var TABS = /\t/;

        return {
            Program: function(node){
                var re = new RegExp(TABS),
                    matches,
                    lines = sourceCode.lines,
                    linebreaks = sourceCode.getText().match(/\r\n|\r|\n|\u2028|\u2029/g),
                    location,
                    totalLength = 0,
                    rangeStart,
                    rangeEnd,
                    fixRange = [];

                lines.forEach(function(line, index){
                    matches = re.exec(line);

                    var linebreakLength = linebreaks && linebreaks[index] ? linebreaks[index].length : 1;
                    var lineLength = line.length + linebreakLength;

                    if (matches) {
                        
                        location = {
                            line: index + 1, 
                            column: matches.index
                        };

                        rangeStart = totalLength + location.column;
                        rangeEnd = rangeStart + 1;

                        context.report({
                            node: node,
                            loc: location,
                            message: "Tabs not allowed.",
                            fix: function(fixer) {
                                return fixer.replaceTextRange([rangeStart, rangeEnd], '    ');
                            }
                        });
                    }

                    totalLength += lineLength;
                });
            }
        };
    }
};
