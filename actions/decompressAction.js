import fs from "node:fs";
import { resolve } from "node:path";
import zlib from "node:zlib";
import { pipeline } from "node:stream";
import printCurrentDir from "../components/printCurrentDir.js";


const decompressAction = ([pathSource, pathDist]) => {
  const pathSourceAbsolute = resolve(pathSource);
  const pathDistAbsolute = resolve(pathDist);

  const readableStream = fs.createReadStream(pathSourceAbsolute);
  const writableStream = fs.createWriteStream(pathDistAbsolute);
  const decompressBuf = zlib.createBrotliDecompress();

  pipeline(readableStream, decompressBuf, writableStream, (err) => {
    if (err) {
      process.stdout.write("Something went wrong\n");
      printCurrentDir();
    }
  });
};

export default decompressAction;
