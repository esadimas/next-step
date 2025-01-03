const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(bodyParser)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use("/api", require('./routers/index'))

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
}) 