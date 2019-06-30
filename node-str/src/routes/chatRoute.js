'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/chatController');

AIMLInterpreter = require('../../node_modules/aimlinterpreter');
var aimlInterpreter = new AIMLInterpreter();


const route = router.get('/1', (req, res, next) => {
    var caminhoEstudante = './src/aiml/base_estudante.aiml.xml';
    
    fs.readFile(caminhoEstudante, function(err, buf) {      
        var conteudoArquivo = buf.toString();
        var regex = new RegExp('<pattern>[A-Z]+(\\s*[A-Z]+)*</pattern>', 'g');
        var assuntos = conteudoArquivo.match(regex);
        res.status(200).send({
            assuntos: assuntos
        });
    });
});

const route2 = router.get('/2', (req, res, next) => {
    var caminhoResponsavel = './src/aiml/base_responsavel.aiml.xml';

    fs.readFile(caminhoResponsavel, function(err, buf) {      
        var conteudoArquivo = buf.toString();
        var regex = new RegExp('<pattern>[A-Z]+(\\s*[A-Z]+)*</pattern>', 'g');
        var assuntos = conteudoArquivo.match(regex);
        res.status(200).send({
            assuntos: assuntos
        });
    });
});

var callback = function(answer, wildCardArray, input){
    return answer;   
};

const create = router.post('/', (req, res, next) => {

    if (req.body.resposta !== undefined) {
        // carrega o módulo mysql
        var mysql = require('mysql2');

        // cliente de conexão
        var conexao = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database : 'bd_boot'
        });
        
        if (req.body.resposta == null) {
            conexao.query('INSERT INTO questoes_validar (pergunta, resposta) VALUES (\''+ req.body.pergunta +'\', null);', 
            function(err, rows, fields) {
                if (!!err) {
                    console.log('Erro na Query');
                }
                else {
            aimlInterpreter.loadAIMLFilesIntoArray(['../node-str/src/aiml/base_estudante.aiml.xml']);
                    res.json({resposta: "Iremos analisar sua sugestão e, talvez, incluiremos em nossa base de conhecimento :D. Obrigada pela colaboração.", status: "ok"});
                }
            });
        } else {
            conexao.query('INSERT INTO questoes_validar (pergunta, resposta) VALUES (\''+ req.body.pergunta +'\', \''+req.body.resposta+'\');', 
            function(err, rows, fields) {
                if (!!err) {
                    console.log('Erro na Query');
                }
                else {
                    res.json({resposta: "Iremos analisar sua sugestão e, talvez, incluiremos em nossa base de conhecimento :D. Obrigada pela colaboração.", status: "ok"});
                }
            });            
        }

        
    } else {
        if (req.body.papel === "Estudante") {
            aimlInterpreter.loadAIMLFilesIntoArray(['../node-str/src/aiml/base_estudante.aiml.xml']);
            if (aimlInterpreter.findAnswerInLoadedAIMLFiles(req.body.pergunta.toUpperCase(),  callback) == null) {
                res.json({resposta: "Infelizmente não encontrei nenhuma resposta sobre: " + req.body.pergunta 
                + ". Se o que você me perguntou tem relação com boletos, mensalidade, anuidade ou pagamento de parcelas, digite BOLETOS." 
                + " Se o que você me perguntou tem relação com avaliações, notas ou médias, digite NOTAS." 
                + " Se o que você me perguntou tem relação com presença, ausência ou frequência nas aulas, digite FREQUÊNCIA."
                + " Caso contrário, digite OK.", status: "sr"});
                // Status sr = Sem Resposta
            } else {
                res.json({resposta: aimlInterpreter.findAnswerInLoadedAIMLFiles(req.body.pergunta.toUpperCase(),  callback), status: "ok"});
            }
        } else {
            aimlInterpreter.loadAIMLFilesIntoArray(['../node-str/src/aiml/base_responsavel.aiml.xml']);
            if (aimlInterpreter.findAnswerInLoadedAIMLFiles(req.body.pergunta.toUpperCase(),  callback) == null) { 
                res.json({resposta: "Infelizmente não encontrei nenhuma resposta sobre: " + req.body.pergunta
                + ". Se o que você me perguntou tem relação com boletos, mensalidade, anuidade ou pagamento de parcelas, digite BOLETOS." 
                + " Se o que você me perguntou tem relação com avaliações, notas ou médias, digite NOTAS." 
                + " Se o que você me perguntou tem relação com presença, ausência ou frequência nas aulas, digite FREQUÊNCIA."
                + " Caso contrário, digite OK.", status: "sr"});
                // Status sr = Sem Resposta
            } else {
                res.json({resposta: aimlInterpreter.findAnswerInLoadedAIMLFiles(req.body.pergunta.toUpperCase(), callback), status: "ok"});
            }            
        }

    }

});

module.exports = router;    