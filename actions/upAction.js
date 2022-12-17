import { resolve } from "node:path";

const upAction = () => {
  process.chdir(resolve(".."));
};
export default upAction;
