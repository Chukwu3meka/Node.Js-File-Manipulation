const fs = require("fs");
const dirPath = "./division";
const rename = require("fs").rename;

async function ls(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
    // if (playersArray[dirent.name]) {
    //   rename(`${dir}/${dirent.name}`, `${dir}/${playersArray[dirent.name]}.webp`, (err) => {
    //     if (err) console.log(err);
    //   });

    // console.log(dirent.name, playersArray[dirent.name]);
  }
}

ls(dirPath).catch(console.error);

return "success";
