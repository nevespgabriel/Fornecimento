const express = require("express");
const fornecedor_controller = require("../controllers/fornecedor.js");
const uppercase = require("../middlewares/uppercase.js");
const router = express.Router();

router.post("/", uppercase, (req, res) => {
    const body = req.body;
    const code = fornecedor_controller.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const elementos = fornecedor_controller.index();
    res.json(elementos);
})

router.get("/:id", (req, res) => {
    const elemento = fornecedor_controller.show(req.params.id);
    res.json(elemento);
})

router.put("/:id", uppercase, (req, res) => {
    const body = req.body;
    const code = fornecedor_controller.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/fornecedor/:id", (req, res) => {
    fornecedor_controller.destroy(req.params.id);
    res.json();
})

module.exports = router;