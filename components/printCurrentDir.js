const printCurrentDir = () =>
  process.stdout.write(
    `You are currently in ${process.cwd()}\n\nenter the command: `
  );
export default printCurrentDir;
