require("./conn")
var express = require('express')
var app = express()
const userRouter=require("./user-route")

const cors=require('cors')

app.use(cors())
app.use(express.json());

app.use("/user",userRouter)
app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3001)