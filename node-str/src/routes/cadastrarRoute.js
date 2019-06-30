'use strict'
const express = require('express');
const router = express.Router();

// carrega o módulo mysql
var mysql = require('mysql2');

// cliente de conexão
var conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'bd_boot'
});

const create = router.post('/', (req, res) => {
    conexao.query('INSERT INTO usuarios (login, senha, nome, papel) VALUES (\'' + req.body.usuario + '\', \'' +req.body.senha+ '\', \''+req.body.nome +'\', \''+ req.body.papel +'\');', 
    function(err, rows, fields) {
        if (!!err) {
            console.log('Erro na Query');
        }
        else {
            res.json({success: true, mensagem: "Usuario cadastrado com sucesso"});
        }
    });
    
});

module.exports = router;    