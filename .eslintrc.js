module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "@typescript-eslint/eslint-plugin",
        "prettier"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs,ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "react-hooks/rules-of-hooks": "warn",
        "react/prop-types": "off",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
        "quotes":"off",
        "react/jsx-sort-props": ["error", {
            "callbacksLast": true
        }]
    },
    "settings": {
        "react": {
            "version": "detect" // React version. "detect" automatically picks the version you have installed.
        }
    }
}

