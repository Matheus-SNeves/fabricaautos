const express = require('express');
const router = express.Router();

const Automovel = require('./controllers/automovel');
const Cliente = require('./controllers/cliente');
const Concessionaria = require('./controllers/concessionaria');
const Venda = require('./controllers/venda');
const Alocacao = require('./controllers/alocacao');

// Rota raiz
router.get('/', (req, res) => {
  res.json({titulo:'Fábrica de Automóveis 2025'});
});

// Rota para obter todos os automóveis
router.get('/automoveis', Automovel.read);
// Rota para obter todos os clientes
router.get('/clientes', Cliente.read);
// Rota para obter todas as concessionárias
router.get('/concessionarias', Concessionaria.read);
// Rota para obter todas as vendas
router.get('/vendas', Venda.read);
// Rota para obter todas as alocações
router.get('/alocacoes', Alocacao.read);

module.exports = router;