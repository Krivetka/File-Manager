import { createReadStream, createWriteStream } from 'node:fs';
import { resolve, parse } from 'node:path';
import { pipeline } from 'stream/promises';
import isFile from "../components/isFile.js";

const cpAction = async ([nameSource, nameDestination]) => {
  const filePathSource = resolve(nameSource);
  const { base } = parse(filePathSource);
  const filePathDestination = resolve(nameDestination, base);

  const isExistSourceFile = await isFile(filePathSource);
  if (!isExistSourceFile) throw new Error('File not found');
  const readableStream = createReadStream(filePathSource);
  const writableStream = createWriteStream(filePathDestination, {
    flags: 'wx',
  });
  await pipeline(readableStream, writableStream);
  process.stdout.write('File success copied');
};

export default cpAction;
