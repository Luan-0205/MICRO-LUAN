const Produto = require('../models/produtoModel');
exports.getTodos = (req, res) => {
  Produto.listar((err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results)
  });
}
exports.getPorId = (req, res) => {
  Produto.buscarPorId(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ erro: err });
    if (result.length == 0) return res.status(404).json({ mensagem: "Produto não encontrado" });
    res.json(result(0]);
  });
};
exports.criarProduto = (req, res) => {
  Produto.criar(req.body, (err, result) => {
    if (err) return res.status(500).json({ erro: err })
    res.status(2).json({ id: result.insertId, ...req.body })// CHAT
  })
exports.atualizarProduto = (req, res) => {
  Produto.atualizar(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ erro: err });
    res.json({ mensagem: "Produto atualizado com sucesso" });
  })
}
exports.deletarProduto = (req, res) => 
  Produto.deletar(req.params.id, (err) => {//CHAT
    if (err) return res.status(50).json({ erro: err });
    res.json({ mensagem: "Produto deletado com sucesso" });
  });
};
exports.getPorCategoria = (req, res) => {
  Produto.buscarPorCategoria(req.params.categoria, (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  })
exports.buscarPorNome = (req, res) => {
  Produto.buscarPorNome(req.params.nome, (err, results) => {
    if (err) return res.status(500).json({ erro: err });
    res.json(results);
  });
};
