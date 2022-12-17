import printCurrentDir from "./printCurrentDir.js";
import upAction from "../actions/upAction.js";
import lsAction from "../actions/lsAction.js";
import splitWords from "./splitWords.js";
import cdAction from "../actions/cdAction.js";
import addAction from "../actions/addAction.js";
import rnAction from "../actions/rnAction.js";

const mapAction = {
  up: {
    args: 0,
    fn: upAction,
  },
  cd: {
    args: 1,
    fn: cdAction,
  },
  ls: {
    args: 0,
    fn: lsAction,
  },
  add: {
    args: 1,
    fn: addAction,
  },
  rn: {
    args: 2,
    fn: rnAction,
  },
  //     'cat': {
  //         args: 1,
  //         fn: catAction,
  //     },
  //     'cp': {
  //         args: 2,
  //         fn: cpAction,
  //     },
  //     'rm': {
  //         args: 1,
  //         fn: rmAction,
  //     },
  //     'mv': {
  //         args: 2,
  //         fn: mvAction,
  //     },
  //     'os': {
  //         args: 1,
  //         fn: osAction,
  //     },
  //     'hash': {
  //         args: 1,
  //         fn: hashAction,
  //     },
  //     'compress': {
  //         args: 2,
  //         fn: compressAction,
  //     },
  //     'decompress': {
  //         args: 2,
  //         fn: decompressAction,
  //     }
};

const actionRouter = async (str) => {
  if (!str) {
    process.stdout.write("Input invalid\n");
    return;
  }
  const [action, ...rest] = splitWords(str);

  const isExistCommand = Object.keys(mapAction).includes(action);
  if (!isExistCommand) {
    process.stdout.write("Input invalid\n");
    return;
  }
  const isRightCountArgs = rest.length >= mapAction[action].args;
  if (isExistCommand && isRightCountArgs) {
    try {
      await mapAction[action].fn(rest);
      printCurrentDir();
    } catch (error) {
      process.stdout.write("Operation failed\n");
    }
  } else {
    process.stdout.write("Input invalid\n");
  }
};

export default actionRouter;
