const fs = require("fs");
const path = require("path");

/*  USANDO BUFFER -> NAO INDICADO, PARA A EXECUCAO ATÉ QUE SEJA FINALIZADA
fs.readFile('./assets/dog.jpg', (erro, buffer) => {
  console.log('imagem foi bufferizadas')
  console.log(buffer)

  fs.writeFile('./assets/dog2.jpg', buffer, (erro) => {
    
    console.log('imagem escrita')
  })
})
*/

module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {
  // STREAM -> MAIS INDICADO, TRABALHA DE MANEIRA ASSINCRONO
  const tiposValidos = ["jpg", "png", "jpeg"];
  const tipo = path.extname(caminho);
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1;

  if (tipoEhValido) {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`;

    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on("finish", () => {
        callBackImagemCriada(false, novoCaminho);
      });
  } else {
    const erro = "Tipo é inválido";
    console.log("Erro! Tipo inválido!");
    callBackImagemCriada(erro);
  }
};
