'use strict';
// start with first party modules then 3 party modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: './public'});
});

app.listen(PORT, () => {
    console.log(`currently listening on ${PORT}`);
});