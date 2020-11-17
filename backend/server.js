const bodyParser = require('body-parser');
const chalk = require('chalk');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 5000;

// Start Server
app.listen(port, () => {
  console.log(`Server alive and listening at port ${port}`);
});