const fs = require('fs')

/*  USANDO BUFFER -> NAO INDICADO, PARA A EXECUCAO ATÉ QUE SEJA FINALIZADA
fs.readFile('./assets/dog.jpg', (erro, buffer) => {
  console.log('imagem foi bufferizadas')
  console.log(buffer)

  fs.writeFile('./assets/dog2.jpg', buffer, (erro) => {
    
    console.log('imagem escrita')
  })
})
*/

// STREAM -> MAIS INDICADO, TRABALHA DE MANEIRA ASSINCRONO
fs.createReadStream('./assets/dog.jpg')
            .pipe(fs.createWriteStream('./assets/dog-stream.jpg'))
            .on('finish', () => {
              console.log('imagem foi escrita com sucesso')
            })
