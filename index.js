import greeting from "./components/greeting.js";
import addReadLine from "./components/addReadLine.js";
import {printCurrentDir} from "./components/printCurrentDir.js";

const app = () => {
  greeting();
  addReadLine();
  printCurrentDir(process.cwd());
};
app();
