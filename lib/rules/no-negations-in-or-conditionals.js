module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'disallow OR conditionals with both its members negated',
            url: 'https://github.com/bitrefill/eslint-plugin-bitrefill/blob/master/docs/rules/no-negations-in-or-conditionals.md',
        },
        fixable: false,
        schema: [],
    },
    create: (context) => {
        return {
            LogicalExpression(node) {
                if (node.operator !== '||') {
                    return;
                }

                if (
                    node.left.type === 'UnaryExpression' &&
                    node.left.operator === '!' &&
                    node.right.type === 'UnaryExpression' &&
                    node.right.operator === '!'
                ) {
                    context.report({
                        node,
                        message: 'OR conditionals cannot have both its members negated',
                        fix(fixer) {
                            // TODO
                        }
                    });
                }
            }
        };
    }
};
