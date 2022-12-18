import fs from "fs/promises";
import { resolve, parse } from "node:path";
import isFile from "../components/isFile.js";

const rnAction = async ([name, newName]) => {
  const pathSource = resolve(name);
  const { dir } = parse(pathSource);
  const pathDestination = resolve(dir, newName);

  const isExistSourceFile = await isFile(pathDestination);

  if (isExistSourceFile) throw new Error("File already exists");
  await fs.rename(pathSource, pathDestination);
  process.stdout.write("File success renamed\n");
};

export default rnAction;
