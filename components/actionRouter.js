import {printCurrentDir} from "./printCurrentDir.js";

// const successMessage = (string) => process.stdout.write(`\x1b[92m${string} \x1b[0m`);
const errorMessage = (string) => process.stdout.write(`\x1b[91m${string} \x1b[0m`);

const mapAction = {
    'up': {
        args: 0,
        fn: upAction,
    },
//     'cd': {
//         args: 1,
//         fn: cdAction,
//     },
//     'ls': {
//         args: 0,
//         fn: lsAction,
//     },
//     'add': {
//         args: 1,
//         fn: addAction,
//     },
//     'rn': {
//         args: 2,
//         fn: rnAction,
//     },
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
}

const actionRouter = async (str) => {
    if (!str) {
        errorMessage('Input invalid');
        return;
    }
    const [action, ...rest] = splitBySpaceOrDoubleQuote(str);

    const isExistCommand = Object.keys(mapAction).includes(action);
    if (!isExistCommand) {
        errorMessage('Input invalid');
        return;
    }
    const isRightCountArgs = rest.length >= mapAction[action].args;
    if (isExistCommand && isRightCountArgs) {
        try {
            await mapAction[action].fn(rest);
            printCurrentDir();
        } catch (error) {
            errorMessage('Operation failed');
        }
    } else {
        errorMessage('Input invalid');
    };
};

export default actionRouter;
