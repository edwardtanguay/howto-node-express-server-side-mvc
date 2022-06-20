import sqlite3 from 'sqlite3';
import * as qsys from './qsys.js';

// const dbPathAndFileName = qsys.buildAbsolutePathAndFileName('src/data/site.sqlite');
const dbPathAndFileName = 'c:\\test.sqlite';
console.log(dbPathAndFileName);

export const getRecordWithSql = (sql) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(dbPathAndFileName);
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
        const db = new sqlite3.Database(dbPathAndFileName);
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
