const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");

conexao.connect((erro) => {
  if (erro) {
    console.error(erro);
  } else {
    console.log('banco de dados conectado com sucesso')

    Tabelas.init(conexao)


    const app = customExpress();

    app.listen(3000, () => {
      console.log("server is running on door: 3000");
    });
  }
});
