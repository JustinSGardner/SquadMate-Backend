'use strict';

const http = require('http');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3333;
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db.js');
connectDB();

const es6Renderer = require('express-es6-template-engine');

const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
};

const app = express();
const server = http.createServer(app);

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(cors(corsOptions));

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

const userController = require('./routes/userRoutes.js');
const teamController = require('./routes/teamRoutes.js');
const documentController = require('./routes/documentRoutes.js');
const getCardInfoController = require('./routes/getCardInfoRoutes.js');

app.use('/user', userController);
app.use('/team', teamController);
app.use('/document', documentController);
app.use('/getCardInfo', getCardInfoController);
