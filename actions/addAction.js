import { writeFile } from 'fs/promises';
import { resolve } from 'node:path';

const addAction = async ([name]) => {
  const path = resolve(name);
  await writeFile(path, '', { flag: 'wx', encoding: 'utf8' });
  process.stdout.write('File success created\n');
};

export default addAction;
