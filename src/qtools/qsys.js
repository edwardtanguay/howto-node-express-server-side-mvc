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

/**
 * Gets the operating-system appropriate absolute path and file name of a file.
 * Note: as parameter always pass a Linux-style site-relative path and file name.
 * 
 * const dbPathAndFileName = qsys.buildAbsolutePathAndFileName('src/data/site.sqlite');
 * 
 * WINDOWS: C:\edward\projects\node-mvc\src\data\site.sqlite
 */
export const buildSystemAbsolutePathAndFileName = (pathAndFileName) => {
	pathAndFileName = qstr.replaceAll(
		pathAndFileName,
		'/',
		qsys.getSystemSlash()
	);
	const abs = __dirname + qsys.getSystemSlash() + pathAndFileName;
	console.log(abs);
	return abs;
};
