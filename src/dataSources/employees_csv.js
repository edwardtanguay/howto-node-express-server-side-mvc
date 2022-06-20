import * as qfil from '../qtools/qfil.js';

const getEmployees = async () => {
	return qfil.getRecordsFromCsvFile('src/data/employees.csv');
}

export default await getEmployees();