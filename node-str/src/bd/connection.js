// carrega o módulo mysql
var mysql = require('mysql2');
var express = require('express');
var app = express();

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