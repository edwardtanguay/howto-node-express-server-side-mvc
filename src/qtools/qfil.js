import fs from 'fs';
import * as qstr from './qstr.js';
import * as qfil from './qfil.js';
import * as qsys from './qsys.js';
import path from 'path';
import { platform } from 'node:process'; // "win32" or "linux"

const __dirname = path.resolve(path.dirname(''));

export const getSiteRelativePathAndFileNames = (folderPath) => {
    let result = [];
    let fileNamesInPath = fs.readdirSync(folderPath);
    fileNamesInPath.forEach((fileName) => {
        let filePath = folderPath + qsys.getSystemSlash() + fileName;
        if (!fs.statSync(filePath).isDirectory()) {
            let filePath = folderPath + qsys.getSystemSlash() + fileName;
            result.push(filePath);
        }
    });
    return result;
};

export const getRelativePathAndFileName = function (absolutePathAndFileName) {
    return qstr.chopLeft(absolutePathAndFileName, __dirname);
};

export const convertBackSlashesToForwardSlashes = function (pathAndFileName) {
    return qstr.replaceAll(pathAndFileName, '\\', '/');
};

export const getContentOfFile = (pathAndFileName) => {
    const fullPathAndFileName = qsys.buildAbsolutePathAndFileName(pathAndFileName);
    return fs.readFileSync(fullPathAndFileName, 'utf8');
};

export const getFileAsLines = (pathAndFileName) => {
    let fixedPathAndFileName = '';
    if (platform === 'win32') {
        fixedPathAndFileName = '\\' + qstr.replaceAll(pathAndFileName, '/', '\\');
    } else {
        fixedPathAndFileName = pathAndFileName; 
    }
    const content = qfil.getContentOfFile(fixedPathAndFileName);
    return qstr.convertStringBlockToLines(content);
};
