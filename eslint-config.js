module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "react-hooks"],
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "object-curly-newline": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "no-shadow": "off", // replaced by ts-eslint rule below
      "@typescript-eslint/no-shadow": "error",
      "react/prop-types": "off", // do not use prop-types
      "react/require-default-props": "off", // do not use prop-types
      "react-hooks/rules-of-hooks": "error", // checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // checks effect dependencies
    },
  };