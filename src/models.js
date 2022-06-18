import nouns from './dataSources/nouns_apiCall.js';
import books from './dataSources/books_localJsonFile.js';
import getTranslations from './dataSources/translations_excelFile.js';

export const siteData = {
	nouns,
	books,
	translations: await getTranslations()
}