"use strict";

/**
 * Reports the given node and identifier name.
 * @param {RuleContext} context The ESLint rule context.
 * @param {ASTNode} node The node to report on.
 * @param {string} identifierName The name of the identifier.
 * @returns {void}
 */
function report(context, node, identifierName) {
    context.report(node, "Disallow the use of $.ajax, Please use sm.ajax");
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow the use of `$.ajax`",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: []
    },

    create: function (context) {

        return {
            CallExpression: function(node){
                var callee = node.callee;

                if (callee.type === "MemberExpression" && callee.object.name == '$' && callee.property.name === 'ajax') {
                    report(context, node, callee.property.name );
                }

            }
        };

    }
};