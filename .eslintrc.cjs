module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // turn on errors for missing imports
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // Built-in imports (come from NodeJS native) go first
          "external", // <- External imports
          "internal", // <- Absolute imports
          ["sibling", "parent"], // <- Relative imports, the sibling and parent types they can be mingled together
          "index", // <- index imports
          "unknown", // <- unknown
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: "asc",
          /* ignore case. Options: [true, false] */
          caseInsensitive: true,
        },
      },
    ],
  },
};
