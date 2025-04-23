const db = require('./db');
const Produto = {




 listar: (callback) => {
    db.query('SELECT * FROM produtos', callback);
  }
  buscarPorId: (id, callback) => {
    db.query('SELECT * FROM produtos WHERE id = ?', [id], callback);
  },

  criar: (produto, callback) => {
    db.query('INSERT INTO produtos SET ?', produto, callback);
  },
  atualizar: (id, produto, callback) => {
    db.query('UPDATE produtos SET ? WHERE id = ?', [produto, id], callback);
  }
  deletar: (id, callback) => {
    db.query('DELETE FROM produtos WHERE id = ?', [id], callback);
  }  buscarPorCategoria: (categoria, callback) => {
    db.query('SELECT * FROM produtos WHERE categoria = ?', [categoria], callback);
  },

  buscarPorNome: (nome, callback) => {
    db.query('SELECT * FROM produtos WHERE nome LIKE ?', [`%${nome}%`], callback);
  }
}module.exports = Produto;
