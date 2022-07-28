require('dotenv').config()
const express = require('express')
const app = express()

const PORT = 3001 || process.env.PORT


app.use(require('cors')())
app.use(express.json())

const mainRouter = require('./Routes/index')
app.use('/api', mainRouter)

app.listen(PORT, ()=>{
    require('./DL/db').connect()
    console.log('server runing on port: ', PORT);
})