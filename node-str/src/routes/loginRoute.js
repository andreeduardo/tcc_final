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

conexao.connect(function(err) {
    if (!!err) {
        console.log('Erro na conexão do BD!');      
    } else {
        console.log("Sucesso na conexão do BD!");
    }
});
  

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "LoginController",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res) => {
    conexao.query(' select * from usuarios WHERE login=\'' + req.body.usuario + '\' AND senha = \'' +req.body.senha+ '\';', 
    function(err, rows, fields) {
        if (!!err) {
            console.log('Erro na Query');
        }
        else {
            if (rows.length > 0) {                
                res.json({success: true, papel: rows[0].papel, nome: rows[0].nome});
            } else {
                res.json({success: false});
            }
        }
    });
    
});

module.exports = router;    