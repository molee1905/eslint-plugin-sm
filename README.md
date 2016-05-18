# eslint-plugin-sm

eslint plugin for sm

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sm`:

```
$ npm install eslint-plugin-sm --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-sm` globally.

## Usage

Add `sm` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sm"
    ]
}
```


Then configure the rules you want to use under the rules section. For now, the fix only support `"always"` option.

```json
{
    "rules": {
        "newline-after-var-plus": "off",
        "sm/newline-after-var": ["error", "always"]
    }
}
```





