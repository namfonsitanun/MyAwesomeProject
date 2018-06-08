module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-use-before-define": 0,
        "semi": ["error", "never"],
        "import/prefer-default-export": 0,
        "import/no-named-as-default": 0,
        "import/no-extraneous-dependencies": 0,
        "no-underscore-dangle": 0,
    },
    env: {
        jest: true,
        browser: true,
    },    
    parser: "babel-eslint"
};