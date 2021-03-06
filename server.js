const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mysql = require('mysql')
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
const ExternalWork = require('./api/externalwork.api')
const Cart = require('./api/cart.api')
const Product = require('./api/product.api')
const TransformerTest = require('./api/transfromerTest.api')
const Schedule = require('./api/schedule.api')
const Test = require('./api/test.api')
const userlogin = require('./controller/login.route')
const Events = require('./api/event.api')
const { sendEmail } = require('./controller/email/mail');
const cookieParser = require('cookie-parser');
const tranformerRoute = require('./router/transform.route')
const personRoute = require('./router/person.route')

require("dotenv").config();
const app = express();





const PORT = process.env.PORT || 8089;
const MYSQLPORT = process.env.PORT || 9999;

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

const mysqlConnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'assert_pro',
    port:'3306'
}) 

mysqlConnection.connect((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('MySql Connected')
    }
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
app.use('/externalwork',ExternalWork());
app.use('/cart',Cart());
app.use('/product',Product());
app.use('/transformertest',TransformerTest());
app.use('/schedule',Schedule());
app.use('/test',Test());
app.use('/events',Events());
app.use('/mysql/transformer', tranformerRoute)
app.use('/mysql/person', personRoute)

app.post("/api/sendMail", (req, res) => {
    console.log(req.body.email)
    sendEmail(req.body.email,req.body.template)

})

// app.get("/get",(req, res) =>{
//     const sql = 'SELECT * FROM assert_pro.transformers;'
//     const query = mysqlConnection.query(sql,(err,results) => {
//         if(err){
//             throw err
//         }
//         console.log(results)
//         res.send(results)
        
//     })
//   })
  

app.listen(PORT, () => {
    console.log('Server is up and running on port number:' + PORT)
});

app.listen(MYSQLPORT, () => {
    console.log('Server is up and running on port number:' + MYSQLPORT)
});