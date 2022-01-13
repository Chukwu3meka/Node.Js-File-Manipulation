const fs = require("fs");
const dirPath = "./files/country";
const rename = require("fs").rename;
const countryCode = require("./source/countryCode");

/*
In this file we'll be working on renaming file using node.js

We've created a folder initially with flags of countries @ './files/country'

What this program will do is to rename the files in country folder using a list of country we already have at './source.countryCode.js'

We'll loop through that countryCode and rename our country flag 
*/

module.exports = () => {
  const countryArray = {};
  for (const [code, country] of Object.entries(countryCode)) {
    // **** code to full name
    countryArray[`${code}.png`.toLowerCase()] = `${country}.png`;
    // **** full name to code
    // countryArray[`${country}.png`] = `${code}.png`.toLowerCase();
  }

  // get number of files in country folder
  //  You have to understand that rename this number of files manually is a pain in the *
  fs.readdir(dirPath, (err, files) => console.log(files.length));

  // This is the main part of our program
  async function ls(path) {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
      if (countryArray[dirent.name]) {
        console.log(dirent.name);
        rename(`${dirPath}/${dirent.name}`, `${dirPath}/${countryArray[dirent.name]}`, (err) => {
          if (err) {
            console.log(`Rename Failed: ${err}`);
          } else {
            console.log("Rename complete!!!");
          }
        });
      }
    }
  }

  ls(dirPath).catch(console.error);

  return "success";
};
