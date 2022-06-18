import express from 'express';
import { data } from './models.js';

const app = express();
const port = 3007;

app.get('/', (req, res) => {
    res.send(
        `<ul>${data.nouns
            .map((m) => `<li>${m.article} ${m.singular}</li>`)
            .join('')}</ul>`
    );
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
