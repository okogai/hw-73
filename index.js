const express = require('express');

const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;
const ENCRYPTION_KEY = 'password';

app.get('/', (req, res) => {
    const message = 'Main page';
    res.send(message);
});

app.get('/:message', (req, res) => {
    const message = req.params.message;
    res.send(message);
});

app.get('/encode/:text', (req, res) => {
    const {text} = req.params;
    const encodedText = Vigenere.Cipher(ENCRYPTION_KEY).crypt(text);
    res.send(encodedText);
});

app.get('/decode/:text', (req, res) => {
    const {text} = req.params;
    const decodedText = Vigenere.Decipher(ENCRYPTION_KEY).crypt(text);
    res.send(decodedText);
});

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});

