import express from 'express';

const app = express();
const port = 3007;

app.get('/', (req, res) => {
    res.send('welcome to this <b>website</b>');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
