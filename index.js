const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = process.env.port || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/a', (req, res) => {
  console.log(req)
  res.send(req.body)
})
app.get('/a', (req, res) => {
  console.log(req)
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})