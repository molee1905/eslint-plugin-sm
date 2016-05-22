/**
 * @fileoverview eslint plugin for sm
 * @author molee1905
 * @copyright 2016 molee1905. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

// import all rules in lib/rules
module.exports.rules = {
    'no-tabs': require('./rules/no-tabs'),
    'newline-after-var': require('./rules/newline-after-var')
};
