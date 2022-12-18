import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'fs/promises';
import { resolve, parse } from 'node:path';
import { pipeline } from 'stream/promises';
import isFile from "../components/isFile.js";

const mvAction = async ([nameSource, nameDirDestination]) => {
  const filePathSource = resolve(nameSource);
  const { base } = parse(filePathSource);
  const dirPathDestination = resolve(nameDirDestination, base);

  const isExistSourceFile = await isFile(filePathSource);
  if (isExistSourceFile) throw new Error('File not found');
  const readableStream = createReadStream(filePathSource);
  const writableStream = createWriteStream(dirPathDestination);
  await pipeline(readableStream, writableStream);
  await rm(filePathSource);
  process.stdout.write('File moved\n');
};

export default mvAction;
