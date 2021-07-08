'use strict';

require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});