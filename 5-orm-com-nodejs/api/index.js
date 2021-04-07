const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())


app.get('/teste', (req, res) => {
  res.status(200).send({mensagem: 'boas-vindas à API'})
})



const port = 3000
app.listen(port, () => {
  console.log(`Server is running on door ${port}`)
})


module.exports = app