const express = require('express')
const app = express()
const port = 5000
// 211.36.142.182

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://suchan:duddndtncks1@cluster0.lykjk.mongodb.net/myDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})