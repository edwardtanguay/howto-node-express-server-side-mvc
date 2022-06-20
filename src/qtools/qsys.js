import * as qmat from './qmat.js';
import * as qsys from './qsys.js';
import * as qstr from './qstr.js';
import path from 'path';
import { platform } from 'node:process'; // "win32" or "linux"

// WINDOWS: C:\edward\projects\node-mvc
// LINUX: /home/edward/projects/node-mvc
const __dirname = path.resolve(path.dirname(''));

export const getSystem = (path) => {
	return platform;
};

export const getSystemSlash = (path) => {
	return platform === 'linux' ? '/' : '\\';
};

export const buildAbsolutePathAndFileName = (pathAndFileName) => {
	pathAndFileName = qstr.replaceAll(pathAndFileName, '/', qsys.getSystemSlash());
	return __dirname + qsys.getSystemSlash() + pathAndFileName;
}
