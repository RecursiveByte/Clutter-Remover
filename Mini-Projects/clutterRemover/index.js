const fs = require('fs');
const path = require('path');
const getEx = require('./getExtension.js');
const express = require('express');
const app = express();

const distortionDirectorypath = path.join(__dirname, 'distortion');

const filesInsideDistortionDir = fs.readdirSync(distortionDirectorypath);
let filePresent = false;

for (let files of filesInsideDistortionDir) {
    if (files.startsWith('.')) continue;

    else {
        
        let extension = getEx.getExtension(files)

        let newDirPath = path.join(distortionDirectorypath, extension)

            //making directory if doesn't exitst 
            if(!fs.existsSync(newDirPath))
              fs.mkdirSync(newDirPath);
            
            let sourcePath = path.join(distortionDirectorypath, files)
            let desPath = path.join(newDirPath, files);
            fs.renameSync(sourcePath, desPath);
        // }

    }
}

