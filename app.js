'use strict';

const http = require('http');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3333;
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

const connectDB = require('./config/db.js');
connectDB();

console.log(process.env.AUTH0_AUDIENCE);
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://squadmate.us.auth0.com/.well-known/jwks.json`,
    }),

    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://squadmate.us.auth0.com/`,
    algorithms: ['RS256'],
});

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

//app.use('/user', userController);
app.get('/api/public', (req, res) => {
    res.json({
        message:
            "Hello from a public endpoint! You don't need to be authenticated to see this.",
    });
});

app.get('/api/private', checkJwt, function (req, res) {
    console.log(process.env);
    res.json({
        message:
            'Hello from a private endpoint! You need to be authenticated to see this.',
    });
});
