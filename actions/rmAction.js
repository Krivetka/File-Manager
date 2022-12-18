import { rm } from 'fs/promises';
import { resolve } from 'node:path';

const rmAction = async ([file]) => {
  const path = resolve(file);
  await rm(path);
  process.stdout.write('File success removed\n');
};

export default rmAction;
