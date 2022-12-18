import { EOL, cpus, homedir, userInfo } from "node:os";
import { arch } from "node:process";

const osAction = ([command]) => {
  switch (command) {
    case "--EOL":
      process.stdout.write(JSON.stringify(EOL) + "\n");
      break;
    case "--cpus":
      cpus().map(({ model, speed }) => {
        process.stdout.write(
          "model: " + model + " speed: " + speed / 1000 + "HGz" + "\n"
        );
      });
      break;
    case "--homedir":
      process.stdout.write(homedir() + "\n");
      break;
    case "--username":
      process.stdout.write(userInfo().username + "\n");
      break;
    case "--architecture":
      process.stdout.write(arch + "\n");
      break;
    default:
      process.stdout.write("Something went wrong\n");
  }
};

export default osAction;
