import * as qsql from '../qtools/qsql.js';

const getTechPersons = async () => {
	const records = await qsql.getRecordsWithSql('SELECT * FROM techPersons');
	console.log(records);
	return records;
	// return [
	// 	{
	// 		fullName: 'James Tester',
	// 		quickInfo: 'test person 1'
	// 	},
	// 	{
	// 		fullName: 'Angela Papiter',
	// 		quickInfo: 'test person 2'
	// 	}
	// ]
}

export default await getTechPersons();