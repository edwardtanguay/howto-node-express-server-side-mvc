import * as qfil from '../qtools/qfil.js';
import * as qstr from '../qtools/qstr.js';

const getJobs = () => {
    const jobs = [];
    const jobFileNames = qfil.getSiteRelativePathAndFileNames('src/data/jobs');
    jobFileNames.forEach((jobFileName) => {
        const lines = qfil.getFileAsLines(jobFileName);
        const markdown = qstr.convertLinesToStringBlock(lines);
        const html = qstr.parseMarkDown(markdown);

        let idCode = qstr.chopLeft(jobFileName, 'data/jobs/');
        idCode = qstr.chopRight(idCode, '.md');

        jobs.push({
            idCode,
            html
        });
    });

    return jobs;
};

export default getJobs();
