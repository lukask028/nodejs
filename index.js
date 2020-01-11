const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');

//Configurando o body parser
app.use(bodyParser.urlencoded({ extend: true}));
app.use(bodyParser.json());

//Definindo as rotas
const router = express.Router();

//rota raiz
router.get('/', (req, res) => res.json({ message: 'Funcionando!'}));
app.use('/',router);

//incia o servidor
app.listen(port);
console.log('Servidor inciado e aguardando conexões na porta 3000')

