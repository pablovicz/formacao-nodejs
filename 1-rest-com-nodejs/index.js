const customExpress = require('./config/customExpress')

const app = customExpress()


app.listen(3000, () => {
  console.log('server is running on door: 3000')
})








