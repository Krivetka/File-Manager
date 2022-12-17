import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { pipeline } from 'stream/promises';

const catAction = async ([file]) => {
  const pathFile = resolve(file);
  const readableStream = createReadStream(pathFile);
  await pipeline(readableStream, process.stdout);
};

export default catAction;
