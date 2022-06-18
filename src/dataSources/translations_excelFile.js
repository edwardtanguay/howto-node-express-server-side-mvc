import Excel from 'exceljs';

const getTranslations = async () => {
    const wb = new Excel.Workbook();
    await wb.xlsx.readFile('./src/data/googleTranslations.xlsx');
    const translations = [];
    // const ws = wb.getWorksheet('Saved translations');
    const ws = wb.getWorksheet(1);
    for (let row = 2; row <= 100000; row++) {
        const fromLanguageCell = `A${row}`;
        const toLanguageCell = `B${row}`;
        const fromPhraseCell = `C${row}`;
        const toPhraseCell = `D${row}`;

        const fromLanguage = ws.getCell(fromLanguageCell).value;
        const toLanguage = ws.getCell(toLanguageCell).value;
        const fromPhrase = ws.getCell(fromPhraseCell).value;
        const toPhrase = ws.getCell(toPhraseCell).value;
        if (fromLanguage === null) {
            break;
        } else {
            translations.push({
                fromLanguage,
                toLanguage,
                fromPhrase,
                toPhrase
            });
        }
    }
    return translations;
};

export default getTranslations;