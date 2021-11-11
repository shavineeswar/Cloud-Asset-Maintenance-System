const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("express-jwt")
const jwks = require("jwks-rsa")
const axios = require("axios")
const AssetApi = require('./api/assert.api')
const AlertApi = require('./api/alert.api')
const InternalWork = require('./api/internalworkorder.api')
const Person = require('./api/peroson.api')
const Blog = require('./api/blog.api')
const userlogin = require('./controller/login.route')
const { sendEmail } = require('./controller/email/mail');
const cookieParser = require('cookie-parser');

require("dotenv").config();
const app = express();





const PORT = process.env.PORT || 8089;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cookieParser());

// const verifyJwt = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//           rateLimit: true,
//           jwksRequestsPerMinute: 5,
//           jwksUri: 'https://dev-p8n2oo9f.us.auth0.com/.well-known/jwks.json'
//     }),
//     audience: "this is unique idetifier",
//     issuer:'https://dev-p8n2oo9f.us.auth0.com/',
//     algorithms: ['RS256']

// }).unless({ path:['/assert']});

// app.use(verifyJwt)
// app.use(bodyParser.json());

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success");
})


app.route('/').get((req, res) => {
    res.send('Maintenance Module');
});

app.route('/protected').get((req, res) => {
    res.send('Maintenance Module protected');
});
app.use('/asset',AssetApi());
app.use('/alert',AlertApi());
app.use('/userlogin', userlogin);
app.use('/internalwork',InternalWork());
app.use('/person',Person());
app.use('/blog',Blog());

app.post("/api/sendMail", (req, res) => {
    console.log(req.body)
    sendEmail(req.body.email, req.body.name, "hello")

})


app.listen(PORT, () => {
    console.log('Server is up and running on port number:' + PORT)
});