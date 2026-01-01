const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export function extractVariables(text = "") {
  return [...new Set([...text.matchAll(VARIABLE_REGEX)].map((m) => m[1]))];
}
