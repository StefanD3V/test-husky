/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  // Lint + format TypeScript source files staged for commit
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],

  // Format everything else that is staged (and safely ignore unknown file types)
  "!(*.{ts,tsx})": "prettier --write --ignore-unknown",
};
