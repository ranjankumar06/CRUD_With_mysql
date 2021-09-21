const express=require('express')
const app = express()
require('./database/db')
require('dotenv').config()

app.use(express.json())

const create= require('./routes/router')

app.use('/ran',create)


const port=3002

var server=app.listen(3002,()=>{
    console.log(`connected ${port}`);
})