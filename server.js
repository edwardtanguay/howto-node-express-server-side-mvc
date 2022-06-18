import express from 'express';
import { siteData } from './models.js';
import { siteView } from './views.js';

const app = express();
const port = 3007;

app.get('/', (req, res) => {
    res.send(siteView(siteData));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
