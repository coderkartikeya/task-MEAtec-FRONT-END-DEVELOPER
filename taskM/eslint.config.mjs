// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // bring in Next.js recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ignore some files/folders
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // custom rules
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
