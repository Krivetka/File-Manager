import greeting from "./components/greeting.js";
import addReadLine from "./components/addReadLine.js";
import { goToHomeDirectory } from "./components/goToHomeDirectory.js";

const app = () => {
  greeting();
  addReadLine();
  goToHomeDirectory();
};
app();
