import { fileURLToPath } from "url";
import { dirname } from "path";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Dynamically import plugins (ESM-friendly)
const [tsPlugin, tailwindPlugin, tsParser] = await Promise.all([
  import("@typescript-eslint/eslint-plugin"),
  import("eslint-plugin-tailwindcss"),
  import("@typescript-eslint/parser"),
]);

export default [
  ...compat.extends("next/core-web-vitals"),

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser.default ?? tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin.default ?? tsPlugin,
      tailwindcss: tailwindPlugin.default ?? tailwindPlugin,
    },
    rules: {
      "tailwindcss/no-custom-classname": "off", // helpful if you’re using shadcn's class names
    },
  },

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      tailwindcss: tailwindPlugin.default ?? tailwindPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
];
