/**
 * @fileoverview newline after var
 * @author molee1905
 * @copyright 2016 molee1905. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../rules/newline-after-var-plus"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

var ALWAYS_ERROR = {
    message: "Expected blank line after variable declarations.",
    type: "VariableDeclaration"
};

var NEVER_ERROR = {
    message: "Unexpected blank line after variable declarations.",
    type: "VariableDeclaration"
};

ruleTester.run("newline-after-var-plus", rule, {

    valid: [
        {code: "var a = 1;\n\nconsole.log(a);", options: ["always"]}
    ],

    invalid: [
        {code: "var a = 1;\n\nconsole.log(a);", options: ["never"], errors: [NEVER_ERROR]},
        {code: "var a = 1;console.log(a);", options: ["always"], errors: [ALWAYS_ERROR]}
    ]
});
