let proximoId = 1;

module.exports = (body ,id=proximoId++) => {
    if(body.endereco.cep != undefined &&
       body.endereco.cep != "" &&
       body.endereco.logradouro != undefined &&
       body.endereco.logradouro != "" &&
       body.endereco.bairro != undefined &&
       body.endereco.bairro != "" &&
       body.endereco.localidade != undefined &&
       body.endereco.localidade != "" &&
       body.nome != undefined && 
       body.nome != ""){
        return {
            id: id,
            nome: body.nome,
            endreco: body.endereco
        };
    }
}