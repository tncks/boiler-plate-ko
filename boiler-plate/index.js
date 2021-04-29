const express = require('express')
const app = express()
const port = 5000
// 211.36.142.182

const { User } = require("./models/User");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const config = require('./config/key')

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
{
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('He')
})

app.post('/register', (req, res) => {
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    else {
      return res.status(200).json({
        success: true
      })
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})