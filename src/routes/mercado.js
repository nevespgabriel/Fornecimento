const express = require("express");
const mercado_controller = require("../controllers/mercado.js");
const cep_endereco = require("../middlewares/cep_endereco.js");
const uppercase = require("../middlewares/uppercase.js");
const router = express.Router();

router.post("/", cep_endereco, uppercase, (req, res) => {
    const body = req.body;
    const code = mercado_controller.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const elementos = mercado_controller.index();
    res.json(elementos);
})

router.get("/:id", (req, res) => {
    const elemento = mercado_controller.show(req.params.id);
    res.json(elemento);
})

router.put("/:id", cep_endereco, uppercase, (req, res) => {
    const body = req.body;
    const code = mercado_controller.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req, res) => {
    mercado_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;