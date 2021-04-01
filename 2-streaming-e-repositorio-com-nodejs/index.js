const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/database/conexao");
const Tabelas = require("./infraestrutura/database/tabelas");

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
