# eslint-plugin-bitrefill

A set of custom ESLint rules from [Bitrefill](https://www.bitrefill.com)

## Installation

You'll first need to install [ESLint](https://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-bitrefill`:

```
$ npm install eslint-plugin-bitrefill --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-bitrefill` globally.

## Usage

Add `eslint-plugin-bitrefill` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "bitrefill"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "bitrefill/rule-name": 2
    }
}
```

## Supported Rules

* no-negations-in-or-conditionals





