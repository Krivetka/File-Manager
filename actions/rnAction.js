import fs from "fs/promises";
import { resolve, parse } from "node:path";

const isExistFile = async (path) => {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const rnAction = async ([name, newName]) => {
  const pathSource = resolve(name);
  const { dir } = parse(pathSource);
  const pathDestination = resolve(dir, newName);

  const isExistSourceFile = await isExistFile(pathDestination);

  if (isExistSourceFile) throw new Error("File already exists");
  await fs.rename(pathSource, pathDestination);
  process.stdout.write("File success renamed\n");
};

export default rnAction;
