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

const route = router.get('/:id', (req, res, next) => {   
    conexao.query('select * from questoes_validar where id = ' + req.params.id + ';', 
    function(err, rows, fields) {
        if (!!err) {
            console.log('Erro na Query');
        }
        else {
            if (rows.length > 0) {
                res.status(200).send({
                    rows
                });   
            }
        }
    });
});

module.exports = router;