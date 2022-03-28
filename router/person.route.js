const express = require('express')
const mysql = require('mysql')

const app = express()

const mysqlConnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'assert_pro',
    port:'3306'
}) 

app.get("/getAll",(req, res) =>{
  const sql = 'SELECT * FROM assert_pro.person;'
  const query = mysqlConnection.query(sql,(err,results) => {
      if(err){
          throw err
      }
      res.send(results)
    //   res.send('Transformers Details')
  })
})





module.exports = app