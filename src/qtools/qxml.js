export const getXmlFileAsObject = (pathAndFileName) => {
    const fullPathAndFileName =
        qsys.buildAbsolutePathAndFileName(pathAndFileName);
    return fs.readFileSync(fullPathAndFileName, 'utf8');
};
