const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const index = require('./routes/ball_up_api')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/courts', index)


app.listen(port, ()=> {
    console.log(`listening on port:${port}`)
})