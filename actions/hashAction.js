import { resolve } from "node:path";
import { createHash } from "node:crypto";
import fs from "node:fs";
import printCurrentDir from "../components/printCurrentDir.js";

const hashAction = async ([fileName]) => {
  const path = resolve(fileName);
  fs.readFile(path, (err, data) => {
    if (err) {
      process.stdout.write("Something went wrong\n");
      printCurrentDir();
    } else {
      const hash = createHash("sha256");
      const hex = hash.update(data).digest("hex");
      process.stdout.write(`\nHash: ${hex}\n`);
      printCurrentDir();
    }
  });
};

export default hashAction;
