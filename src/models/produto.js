const mercado = require("../controllers/mercado.js");
const fornecedor = require("../controllers/fornecedor.js");
let proximoId = 1;

module.exports = (body ,id=proximoId++) => {
    if(body.nome != undefined && 
       body.nome != "" &&
       !isNaN(body.quantidade) &&
       body.quantidade > 0 &&
       mercado.show(body.idMercado) &&
       fornecedor.show(body.idFornecedor)
       ){
        return {
            id: id,
            nome: body.nome,
            quantidade: body.quantidade,
            idMercado: body.idMercado,
            idFornecedor: body.idFornecedor
        };
    }
}