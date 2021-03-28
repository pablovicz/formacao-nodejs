module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    res.send('GET / Você está na rota de atendimento')
  })

  app.post('/atendimentos', (req, res) => {
    const data = req.body
    console.log(data)
    res.send("POST / Você está na rota de atendimentos")
  })
  
}