# Disallow OR conditionals with both its members negated (no-negations-in-or-conditionals)

Boolean logic can sometimes be written in a confusing way. When you are thinking about a problem, your brain is wrapped in deep layers of logic. It’s probably best to unwrap as much complexity as possible for the next guy reading and to be sure there isn’t a bug.

`!a || !b` is tricky code. Better to write the logically equivalent of `!(a &&b)`

## Rule Details

This rule aims to prevent confusing boolean logic by disallowing OR conditionals with both its members negated.

Examples of **incorrect** code for this rule:

```js
!a || !b
!a || !b || !c || !d || !e
```

Examples of **correct** code for this rule:

```js
!(a && b)
!(a && b && c && d && e)
```

## When Not To Use It

If you don't want simplify boolean logic, then it's safe to disable this rule.
