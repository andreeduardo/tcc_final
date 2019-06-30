import { ChatService } from './../service/chat/chat.service';
import { Component, NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
declare var $: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent {

  public objMensagem: {origem: string, retorno: string};
  public arrMensagens = [];
  public mensagem = "";
  public nomeUsuario = "";
  public perguntaMensagem = "";
  public sn_erro = 0;
  
  public JsonNomeUsuario = localStorage.getItem('nomeUsuario');
  public JsonPapelUsuario = localStorage.getItem('papelUsuario');

  constructor(private chat: ChatService,
              private login: LoginComponent) { 
  }
           
  enviarMensagem(value: string, papel: string) {

    this.objMensagem = {origem: 'user', retorno: `${value}`};
    this.arrMensagens.push(this.objMensagem);

    // Se a mensagem anterior não teve resposta, executa esse trecho de código
    if (this.sn_erro == 1) {
      // Se a resposta for OK, executa esse trecho de código
      if (value.toUpperCase() == "OK") {

        this.chat.cadastraQuestao(this.perguntaMensagem.toUpperCase(), null).subscribe(
          res => {
            this.objMensagem = {origem: 'chat', retorno: res.resposta };
            this.arrMensagens.push(this.objMensagem);
            this.sn_erro = 0;
          }
          
        );
        
      } else {
        this.chat.cadastraQuestao(this.perguntaMensagem.toUpperCase(), value).subscribe(
          res => {
            this.objMensagem = {origem: 'chat', retorno: res.resposta };
            this.arrMensagens.push(this.objMensagem);
            
            this.chat.enviarMensagem(value.toUpperCase(), JSON.parse(this.JsonPapelUsuario).papel).subscribe(
              res => {
                this.objMensagem = {origem: 'chat', retorno: res.resposta};
                this.arrMensagens.push(this.objMensagem);
                if (res.status !== "sr") {
                  this.sn_erro = 0;
                }
              });
          }
        );
      }

    } else {
      this.chat.enviarMensagem(value.toUpperCase(), JSON.parse(this.JsonPapelUsuario).papel).subscribe(
        res => {
          if (res.status == "sr") {
            this.sn_erro = 1;
            this.perguntaMensagem = value;
            this.objMensagem = {origem: 'chat', retorno: res.resposta};
            this.arrMensagens.push(this.objMensagem);
          } else {            
            this.objMensagem = {origem: 'chat', retorno: res.resposta};
            this.arrMensagens.push(this.objMensagem);
          }
        }); 
    }
    this.mensagem = "";

    $('#historicoMensagens').animate({
      scrollTop: 10000000
    }, 500);

  }

  ngOnInit() {
    var strAssuntos = "";

    if (JSON.parse(this.JsonPapelUsuario).papel == "Estudante") {
      this.chat.getAssuntosEstudante().subscribe(res => {
        var arrAssuntos = res['assuntos'];
        arrAssuntos.forEach(element => {
          element = element.replace("<pattern>", "");
          element = element.replace("</pattern>", "");
          strAssuntos += element + ', ';
        });
  
        strAssuntos = strAssuntos.substring(0,(strAssuntos.length - 2));
        var ultimaVirgula = strAssuntos.lastIndexOf(",");
  
        this.nomeUsuario = JSON.parse(this.JsonNomeUsuario);
        this.objMensagem = {
          origem: 'chat', 
          retorno:` Olá, eu sou o Duca! Sou um chatbot em desenvolvimento e até o momento
           posso lhe orientar sobre `+
           strAssuntos.substring(0, ultimaVirgula).toLocaleLowerCase() + ' e ' + strAssuntos.substring(ultimaVirgula + 2, strAssuntos.length).toLocaleLowerCase()
           +`. \nPara isso, digite `+
           strAssuntos.substring(0, ultimaVirgula) + ' e ' + strAssuntos.substring(ultimaVirgula + 2, strAssuntos.length)
           +` e eu tentarei lhe ajudar :D.`
        };
        this.arrMensagens.push(this.objMensagem);
      });
    } else {
      this.chat.getAssuntosResponsavel().subscribe(res => {
        var arrAssuntos = res['assuntos'];
        arrAssuntos.forEach(element => {
          element = element.replace("<pattern>", "");
          element = element.replace("</pattern>", "");
          strAssuntos += element + ', ';
        });
  
        strAssuntos = strAssuntos.substring(0,(strAssuntos.length - 2));
        var ultimaVirgula = strAssuntos.lastIndexOf(",");
  
        this.nomeUsuario = JSON.parse(this.JsonNomeUsuario);
        this.objMensagem = {
          origem: 'chat', 
          retorno:` Olá, eu sou o Duca! Sou um chatbot em desenvolvimento e até o momento
           posso lhe orientar sobre `+
           strAssuntos.substring(0, ultimaVirgula).toLocaleLowerCase() + ' e ' + strAssuntos.substring(ultimaVirgula + 2, strAssuntos.length).toLocaleLowerCase()
           +`. \nPara isso, digite `+
           strAssuntos.substring(0, ultimaVirgula) + ' e ' + strAssuntos.substring(ultimaVirgula + 2, strAssuntos.length)
           +` e eu tentarei lhe ajudar :D.`
        };
        this.arrMensagens.push(this.objMensagem);
      });      
    }

  }
}