import { resolve } from "node:path";

export const upAction = () => {
  process.chdir(resolve(".."));
};
