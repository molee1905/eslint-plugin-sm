/**
 * @fileoverview Disallow mixed spaces and tabs for indentation
 * @author Jary Niebur
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------


var rule = require("../rules/no-tabs"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run("no-tabs", rule, {

    valid: [
        {
            code: "    var x = 5;"
        }
    ],

    invalid: [
        {
            code: "function add(x, y) {\n\t return x + y;\n}",
            errors: [
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 2
                }
            ]
        },
        {
            code: "\t ;\n/*\n\t * Hello\n\t */",
            errors: [
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 1
                },
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 3
                },
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 4
                }
            ]
        },
        {
            code: "\t var x = 5, y = 2, z = 5;\n\n\t \tvar j =\t x + y;\nz *= j;",
            errors: [
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 1,
                    column: 1
                },
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 3,
                    column: 1
                }
            ]
        },
        {
            code: "\tvar x = 5,\n  \t  y = 2;",
            errors: [
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 1,
                    column: 1
                },
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 2,
                    column: 3
                }
            ]
        },
        {
            code: "`foo${\n \t  5 }bar`;",
            env: { es6: true },
            errors: [
                {
                    message: "Tabs not allowed.",
                    type: "Program",
                    line: 2,
                    column: 2
                }
            ]
        }
    ]
});
