
import { build } from "esbuild";
import path from "path";
import fs from "fs";
import { exec } from'child_process';
//
const directoryPath = './src/client';
const targetFiles = [];
//
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
//  console.log('Files in directory:');
  files.forEach(file => {
    const vEnd = file.endsWith(".tsx");
    if(vEnd) {
     targetFiles.push(file);
    }
  });
//console.log(targetFiles);
  targetFiles.forEach(file => {
    let target = file.replace(".tsx", '');
//console.log("target=", target);
    let cmd = `npx esbuild --bundle ./src/client/${target}.tsx --format=esm --minify --outfile=./public/static/${target}.js`;
console.log("cmd=", cmd);
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.error(`stderr: ${stderr}`);
        throw new Error('Error , build');
      }
//      console.log(`stdout: ${stdout}`)
    });
  });
});
