import * as pluralize from "pluralize";

export function getPlural(str: any): string {
  return pluralize.plural(str);
}

export * from "./src/Phrase";
// export * from "./src/Tokens";
