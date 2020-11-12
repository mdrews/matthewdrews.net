const bodyParser = require('body-parser');
const chalk = require('chalk');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server alive and listening at port ${port}`);
});