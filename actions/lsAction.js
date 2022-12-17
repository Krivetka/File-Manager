import { readdir } from "fs/promises";

const filterByType = ({ files, onlyDir, onlyFile }) => {
  if (onlyDir) {
    return files.filter((file) => file.isDirectory());
  }
  if (onlyFile) {
    return files.filter((file) => file.isFile());
  }
};

const sortByName = (files) => {
  return files.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

const lsAction = async () => {
  const currentDir = process.cwd();
  const files = await readdir(currentDir, { withFileTypes: true });

  const onlySortFolders = sortByName(filterByType({ files, onlyDir: true }));
  const onlySortFiles = sortByName(filterByType({ files, onlyFile: true }));

  const table = [...onlySortFolders, ...onlySortFiles].map((dirent) => ({
    Name: dirent.name,
    Type: dirent.isFile() ? "file" : "directory",
  }));
  console.table(table);
};

export default lsAction;
