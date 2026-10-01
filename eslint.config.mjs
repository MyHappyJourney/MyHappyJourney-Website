import { defineConfig } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([{
    extends: [...next],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "jsx-a11y/alt-text": "off"
    }
}]);
