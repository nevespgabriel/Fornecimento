const express = require("express");
const port = 2000;
const fornecedor_router = require("./routes/fornecedor.js");
const mercado_router = require("./routes/mercado.js");
const produto_router = require("./routes/produto.js");
const cep_endereco = require("./middlewares/cep_endereco.js");

const app = express();
app.use(express.json());
//app.use(cep_endereco);

app.use("/fornecedor", fornecedor_router);
app.use("/mercado", mercado_router);
app.use("/produto", produto_router);
app.listen(port, () => {
    console.log(`Server running in ${port} port.`);
})

