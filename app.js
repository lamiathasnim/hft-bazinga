const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const fs = require('fs')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

const port = process.env.PORT || 8080


app.use(express.static('public'))
mongoose.set('strictQuery', true)
// app.use(express.bodyParser())
app.use(authRoutes)
app.use(express.json())
app.set('view engine','ejs')
// app.use(express.urlencoded({ extended: true }))
const dbURI = 'mongodb+srv://lamiathasnim:lamia16@cluster0.ggs1usn.mongodb.net/node-auth';
mongoose.connect(dbURI)
    .then((result)=>app.listen(8080))
    .catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.render('home')
})

// app.get('/qr',(req,res)=>{
//    res.sendFile(path.join(__dirname,"./qrcode.html"))
   
// })

app.get('/result',(req,res)=>{
    res.render('result')
})
app.get('/verify',(req,res)=>{
    res.render('verify')
})

// app.get('/data',(req,res)=>{
//     res.render('data')
// })
app.get('/admin',(req,res)=>{
    res.render('admin')
})

app.listen(port,()=>{
    console.log('App listening on port',port);
})