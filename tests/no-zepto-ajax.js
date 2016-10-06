
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../rules/no-zepto-ajax"),
    RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("no-zepto-ajax", rule, {
    valid: [
        {
            code: "sm.ajax"
        },
        {
            code: "sm.ajax()"
        }
    ],
    invalid: [
        {
            code: "$.ajax()",
            errors: [{ message: "Unexpected ajax.", type: "CallExpression", line: 1, column: 1 }]
        },
        {
            code: "$.ajax({\n\turl: 'http://m.sm.cn',\n\tsuccess: function () {}})",
            errors: [{ message: "Unexpected ajax.", type: "CallExpression", line: 1, column: 1 }]
        }
    ]
});