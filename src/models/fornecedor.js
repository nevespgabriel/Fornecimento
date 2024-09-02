let proximoId = 1;

module.exports = (body ,id=proximoId++) => {
    if(body.nome != undefined && body.nome != ""){
        return {
            id: id,
            nome: body.nome
        };
    }
}