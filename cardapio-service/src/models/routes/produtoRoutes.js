const express = require('express')
const router = express.Router()
const controller = require('../controllers/produtoController')
router.get('/produtos', controller.getTodos)
router.get('/produtos/:id', controller.getPorId)
router.post('/produtos', controller.criarProduto)
router.put('/produtos/:id', controller.atualizarProduto)
router.get('/produtos/busca/:nome', controller.buscarPorNome)
module.exports = router