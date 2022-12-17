import readline from "node:readline";
import getUserName from "./getUserName.js";

const addReadLine = () => {
  const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readLine
    .on("line", (input) => {
      if (input.trim().toLowerCase() === ".exit") {
        readLine.close();
      }

    })
    .on("SIGINT", () => readline.close())
    .on("close", () => {
      process.stdout.write(
        `Thank you for using File Manager, ${getUserName()}, goodbye!`
      );
      process.exit(0);
    });
};
export default addReadLine;
