const rule = require('../../../lib/rules/no-negations-in-or-conditionals');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();
ruleTester.run('no-negations-in-or-conditionals', rule, {
    valid: ['!a && !b'],
    invalid: [
        {
            code: '!a || !b',
            errors: [{
                message: 'OR conditionals cannot have both its members negated',
                type: 'LogicalExpression'
            }]
        }
    ]
});
