import { createReadStream } from "node:fs";
import { resolve } from "node:path";
import printCurrentDir from "../components/printCurrentDir.js";

const catAction = async ([file]) => {
  const pathFile = resolve(file);
  const readableStream = createReadStream(pathFile);

  readableStream.on("error", () => {
    process.stdout.write("Something went wrong\n");
    printCurrentDir();
  });
  readableStream.on("end", () => {
    process.stdout.write("\n");
    printCurrentDir();
  });
  readableStream.on("data", (data) => process.stdout.write(data));
};

export default catAction;
