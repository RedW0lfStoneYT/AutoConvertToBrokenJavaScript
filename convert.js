const prompt = require('prompt-sync')();
const fs = require('fs');
const brokenCore = require('./Broken.js');

const file = prompt('What file would you like to convert: ');


fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(`Read Error ${err}`);
    return;
  }
  console.log(data.replace(/[\r\n]+/g, "").replace(/  /g, ""));
  const broken = brokenCore.compile(data);
  fs.writeFile(`${file.split(".")[0]} - broken.js`, `eval(${broken});`, error => {
    if (err) {
      console.error(`Write Error ${error}`);
      return;
    }
  });
});
