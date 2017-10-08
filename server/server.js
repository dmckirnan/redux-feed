const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));

const server = app.listen(8000, () => console.log('Live on 8000'));
module.exports = server;
