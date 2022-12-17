import { homedir } from "node:os";

import printCurrentDir from "./printCurrentDir.js";

export const goToHomeDirectory = () => {
  process.chdir(homedir());
  printCurrentDir();
};
