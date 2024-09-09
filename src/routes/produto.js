const express = require("express");
const produto_controller = require("../controllers/produto.js");
const uppercase = require("../middlewares/uppercase.js");
const router = express.Router();

router.post("/", uppercase, (req, res) => {
    const body = req.body;
    const code = produto_controller.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const elementos = produto_controller.index();
    res.json(elementos);
})

router.get("/:id", (req, res) => {
    const elemento = produto_controller.show(req.params.id);
    res.json(elemento);
})

router.put("/:id", uppercase, (req, res) => {
    const body = req.body;
    const code = produto_controller.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req, res) => {
    produto_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;