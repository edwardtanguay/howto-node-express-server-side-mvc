import fs from 'fs';
import * as qsys from './qsys.js';
import { XMLParser } from 'fast-xml-parser'; 

/**
 * Convert XML file to JavaScript object.
 *
 * const obj = qxml.getXmlFileAsObject('src/data/settings.xml');
 *
 * {
 *   settings: {
 *     type: 'jdbc-mysql',
 *     user: 'sbanks',
 *     password: '123',
 *   }
 * }
 */
export const getXmlFileAsObject = (pathAndFileName) => {
	const fullPathAndFileName =
		qsys.buildSystemAbsolutePathAndFileName(pathAndFileName);
	const xmlAsText = fs.readFileSync(fullPathAndFileName, 'utf8');
	const parser = new XMLParser();
	const xmlAsObject = parser.parse(xmlAsText);
	return xmlAsObject;
};