// cria o servidor e define a porta de execucao
const express = require('express')
//reune tudo o que tem no controllers e insere no app
const consign = require('consign')
// interpretador de body de requisicao
const bodyParser = require('body-parser')


module.exports = () => {
  const app = express()

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  consign()
        .include('controllers')
        .into(app)
  
  return app
}

