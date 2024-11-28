const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const message = 'Main page';
    res.send(message);
});

app.get('/:message', (req, res) => {
    const message = req.params.message;
    res.send(message);
});

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});

