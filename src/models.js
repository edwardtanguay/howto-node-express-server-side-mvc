import axios from 'axios';
import fs from 'fs';

const nouns = (
    await axios.get('https://edwardtanguay.netlify.app/share/germanNouns.json')
).data;

const books = JSON.parse(fs.readFileSync('./src/data/books.json'));

export const siteData = {
	nouns,
	books
}
