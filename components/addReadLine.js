import readline from "node:readline";
import getUserName from "./getUserName.js";
import actionRouter from "./actionRouter.js";

const addReadLine = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl
    .on("line", (input) => {
      if (input.trim().toLowerCase() === ".exit") {
        rl.close();
      }
      actionRouter(input);

    })
    .on("SIGINT", () => rl.close())
    .on("close", () => {
      process.stdout.write(
        `Thank you for using File Manager, ${getUserName()}, goodbye!`
      );
      process.exit(0);
    });
};
export default addReadLine;
