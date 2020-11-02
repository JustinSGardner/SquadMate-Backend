'use strict';

const http = require('http');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3333;
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db.js');
connectDB();