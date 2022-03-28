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

app.get("/get",(req, res) =>{
  const sql = 'SELECT * FROM assert_pro.transformers;'
  const query = mysqlConnection.query(sql,(err,results) => {
      if(err){
          throw err
      }
      console.log(results)
      res.send(results)
    //   res.send('Transformers Details')
  })
})

app.get("/getOne/:id",(req, res) =>{
    const sql = `SELECT * FROM assert_pro.transformers WHERE transformerId=${req.params.id}`
    const query = mysqlConnection.query(sql,(err,results) => {
        if(err){
            throw err
        }
        console.log(results)
        res.send(results)
        // res.send('Transformers Details')
    })
  })

  app.get("/getPerson/:id",(req, res) =>{
    const sql = `SELECT p.name,p.email,p.phone FROM assert_pro.transformers t,assert_pro.person p WHERE t.assetOwner=p.id AND transformerId=${req.params.id}`
    const query = mysqlConnection.query(sql,(err,results) => {
        if(err){
            throw err
        }
        console.log(results)
        res.send(results)
        // res.send('Transformers Details')
    })
  })

  app.post("/addTranformer",(req, res) =>{
    const sql = `insert into transformers(assetOwner,TypeCategory1,TypeCategory2,NameofSpecification,Numberofphases1,Numberofphases2,Ratedpower1,Nominalvoltage1,Nominalvoltage2,RatedInsulationlevel1,Ratedcurrent1,RatedFrequency,SI,LI,VectorGroup,Temperature,TypeOfOil,TCType,TCTapNumber1,Cool) values('1',${req.body.TypeCategory1},${req.body.TypeCategory2},${req.body.NameofSpecification},${req.body.Numberofphases1},${req.body.Numberofphases2},${req.body.Ratedpower1},${req.body.Nominalvoltage1},${req.body.Nominalvoltage2},${req.body.RatedInsulationlevel1},${req.body.Ratedcurrent1},${req.body.RatedFrequency},${req.body.SI},${req.body.LI},${req.body.VectorGroup},${req.body.Temperature},${req.body.TypeofOil},${req.body.TCType},${req.body.TCTapNumber1},${req.body.Cool});`
    const query = mysqlConnection.query(sql,(err,results) => {
        if(err){
            throw err
        }
        console.log(results)
        res.send(results)
        // res.send('Transformers Details')
    })
  })



module.exports = app