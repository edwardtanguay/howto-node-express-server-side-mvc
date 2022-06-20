import sqlite3 from 'sqlite3';
import * as qsys from './qsys.js';

//view and manage SQLite files on Windows/Mac/Linux with: https://sqlitebrowser.org/dl
const absoluteDbPathAndFileName = qsys.buildSystemAbsolutePathAndFileName(
	'src/data/site.sqlite'
);

export const getRecordWithSql = (sql) => {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database(absoluteDbPathAndFileName);
		db.all(sql, function (err, records) {
			if (records === undefined) {
				reject(err);
			} else if (records.length === 0) {
				resolve(null);
			} else {
				resolve(records[0]);
			}
		});
		db.close();
	});
};

export const getRecordsWithSql = (sql) => {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database(absoluteDbPathAndFileName);
		db.all(sql, function (err, records) {
			if (records === undefined) {
				reject(err);
			} else if (records.length === 0) {
				resolve([]);
			} else {
				resolve(records);
			}
		});
		db.close();
	});
};
