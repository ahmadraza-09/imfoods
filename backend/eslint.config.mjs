import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node, // 👈 enables Node.js globals (process, __dirname, etc.)
      },
    },
    rules: {
      "no-undef": "off"
    }
  },
  js.configs.recommended,
];
