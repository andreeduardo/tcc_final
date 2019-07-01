'use strict'

const express = require('express');
const router = express.Router();

AIMLInterpreter = require('../../node_modules/aimlinterpreter');
var aimlInterpreter = new AIMLInterpreter();
var aimlInterpreterResp = new AIMLInterpreter();

// carrega o módulo mysql
var mysql = require('mysql2');

// cliente de conexão
var conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'bd_boot'
});

const route = router.get('/', (req, res, next) => {
    conexao.query('select * from questoes_validar where sn_avaliado = 0;',
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

function escreveEstudante(pergunta, novo) {
    var conteudo = `
    <category>
        <pattern>`+pergunta.toUpperCase()+`</pattern>
            <template>
            `+novo+`
            </template>
    </category>

    <category>
        <pattern>*`+pergunta.toUpperCase()+`*</pattern>
        <template>
            <srai>`+pergunta.toUpperCase()+`</srai>
        </template>
    </category>
</aiml>`;

    var caminhoEstudante = './src/aiml/base_estudante.aiml.xml';
    return new Promise((resolve, reject) => {
        fs.readFile(caminhoEstudante, function(err, buf) {
            var conteudoArquivo = buf.toString();
            conteudoArquivo = conteudoArquivo.replace('</aiml>', conteudo);
            console.log('Arquivo lido!');
            new Promise((resolve, reject) => {
                fs.unlink(caminhoEstudante, function (err) {
                    if (err) throw err;
                    console.log('Arquivo deletado!');
                });
                resolve();
            });
            new Promise((resolve, reject) => {
                fs.appendFile(caminhoEstudante, conteudoArquivo,{enconding:'utf-8',flag: 'a'}, function (err) {
                    if (err) throw err;
                    console.log('Arquivo salvo!');
                    aimlInterpreter.loadAIMLFilesIntoArray([caminhoEstudante]);
                    console.log('Arquivo carregado!');
                });
                resolve();
            });
        });
        resolve();
    });
}

function escreveResponsavel(pergunta, novo) {

    var conteudo = `
    <category>
        <pattern>`+pergunta.toUpperCase()+`</pattern>
            <template>
            `+novo+`
            </template>
    </category>

    <category>
        <pattern>*`+pergunta.toUpperCase()+`*</pattern>
        <template>
            <srai>`+pergunta.toUpperCase()+`</srai>
        </template>
    </category>
</aiml>`;

    var caminhoResponsavel = './src/aiml/base_responsavel.aiml.xml';
    return new Promise((resolve, reject) => {
        fs.readFile(caminhoResponsavel, function(err, buf) {
            console.log('Arquivo resp lido!');
            var conteudoArquivoResp = buf.toString();
            conteudoArquivoResp = conteudoArquivoResp.replace('</aiml>', conteudo);
            new Promise((resolve, reject) => {
                fs.unlink(caminhoResponsavel, function (err) {
                    if (err) throw err;
                    console.log('Arquivo do resp deletado!');
                });
                resolve();
            });
            new Promise((resolve, reject) => {
                fs.appendFile(caminhoResponsavel, conteudoArquivoResp,{enconding:'utf-8',flag: 'a'}, function (err) {
                    if (err) throw err;
                    console.log('Arquivo resp salvo!');
                    aimlInterpreterResp.loadAIMLFilesIntoArray([caminhoResponsavel]);
                    console.log('Arquivo resp carregado!');
                });
                resolve();
            });
        });
        resolve();
    });
}

function escreveEstudanteLink(pergunta, resposta) {
    var conteudoLink = `
    <category>
    <pattern>*`+pergunta.toUpperCase()+`*</pattern>
    <template>
    <srai>`+resposta.toUpperCase()+`</srai>
    </template>
    </category>

    </aiml>`
    ;

    var caminhoEstudante = './src/aiml/base_estudante.aiml.xml';
    return new Promise((resolve, reject) => {
        fs.readFile(caminhoEstudante, function(err, buf) {
            console.log('Arquivo lido!');
            var conteudoArquivo = buf.toString();
            conteudoArquivo = conteudoArquivo.replace('</aiml>', conteudoLink);
            new Promise((resolve, reject) => {
                fs.unlink(caminhoEstudante, function (err) {
                    if (err) throw err;
                    console.log('Arquivo deletado!');
                });
                resolve();
            });
            new Promise((resolve, reject) => {
                fs.appendFile(caminhoEstudante, conteudoArquivo,{enconding:'utf-8',flag: 'a'}, function (err) {
                    if (err) throw err;
                    console.log('Arquivo salvo!');
                    aimlInterpreter.loadAIMLFilesIntoArray([caminhoEstudante]);
                    console.log('Arquivo carregado!');
                });
                resolve();
            });
        });
        resolve();
    });
}

function escreveResponsavelLink(pergunta, resposta) {

    var conteudoLink = `
    <category>
    <pattern>*`+pergunta.toUpperCase()+`*</pattern>
    <template>
    <srai>`+resposta.toUpperCase()+`</srai>
    </template>
    </category>

    </aiml>`
    ;

    var caminhoResponsavel = './src/aiml/base_responsavel.aiml.xml';
    return new Promise((resolve, reject) => {
        fs.readFile(caminhoResponsavel, function(err, buf) {
            console.log('Arquivo resp lido!');
            var conteudoArquivoResp = buf.toString();
            conteudoArquivoResp = conteudoArquivoResp.replace('</aiml>', conteudoLink);
            new Promise((resolve, reject) => {
                fs.unlink(caminhoResponsavel, function (err) {
                    if (err) throw err;
                    console.log('Arquivo do resp deletado!');
                });
                resolve();
            });
            new Promise((resolve, reject) => {
                fs.appendFile(caminhoResponsavel, conteudoArquivoResp,{enconding:'utf-8',flag: 'a'}, function (err) {
                    if (err) throw err;
                    console.log('Arquivo resp salvo!');
                    aimlInterpreterResp.loadAIMLFilesIntoArray([caminhoResponsavel]);
                    console.log('Arquivo resp carregado!');
                });
                resolve();
            });
        });
        resolve();
    });
}


const route1 = router.put('/', (req, res, next) => {
    if (req.body.novo !== undefined) {
        // altera o arquivo da base AIML

        if (req.body.insereEstudante == true && req.body.insereResponsavel == true) {
            escreveEstudante(req.body.pergunta, req.body.novo).then(
                () => {
                    escreveResponsavel(req.body.pergunta, req.body.novo).then(() => {});
                }
            );
        } else {
            if (req.body.insereEstudante == true) {
                escreveEstudante(req.body.pergunta, req.body.novo).then(() => {});
            } else {
                escreveResponsavel(req.body.pergunta, req.body.novo).then(() => {});
            }
        }
    } else {
        if (req.body.resposta !== undefined) {
            // altera o arquivo da base AIML

            if (req.body.insereEstudante == true && req.body.insereResponsavel == true) {
                escreveEstudanteLink(req.body.pergunta, req.body.resposta).then(
                    () => {
                        escreveResponsavelLink(req.body.pergunta, req.body.resposta).then(() => {});
                    }
                );
            } else {
                if (req.body.insereEstudante == true) {
                    escreveEstudanteLink(req.body.pergunta, req.body.resposta).then(() => {});
                } else {
                    escreveResponsavelLink(req.body.pergunta, req.body.resposta).then(() => {});
                }
            }
        }
    }

    conexao.query('update questoes_validar set sn_avaliado = 1 where id = ' + req.body.id + ';',
    function(err, rows, fields) {
        if (!!err) {
            throw err;
        } else {
            res.status(200).send({});
        }
    });
});

module.exports = router;