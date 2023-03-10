const unknownUsername = "unknown";

const getUserName = () => {
  try {
    const args = process.argv.slice(2);
    if (args.length === 0) return unknownUsername;
    return args.find((arg) => arg.startsWith("--username=")).split("=")[1];
  } catch {
    return unknownUsername;
  }
};

export default getUserName;
