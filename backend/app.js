const express = require('express');
const router = require('./routes');
// need to use cors, otherwise we can't order the products.
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

module.exports = app;
