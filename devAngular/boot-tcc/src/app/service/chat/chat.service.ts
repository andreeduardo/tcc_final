import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) { }

  public enviarMensagem(pPergunta: string, pPapel: string): any {		
		try {
			let json = {
				pergunta: pPergunta.replace('É', 'E').replace('Ã', 'A').replace('Ó', 'O').replace('Á', 'A'),
				papel: pPapel
			};
			let url: string = `http://localhost:3000/chat`;
			return this.httpClient.post(url, json);
		}
		catch (e) {
      return e.getMessage();	
    }
	}

	public cadastraQuestao(pPergunta: string, pResposta: string): any {
		try {
			let json = {
				pergunta: pPergunta,
				resposta: pResposta				
			};
			let url: string = `http://localhost:3000/chat`;
			return this.httpClient.post(url, json);
		}
		catch (e) {
      return e.getMessage();	
    }
	}

  public getAssuntosEstudante() {		
		let url: string = `http://localhost:3000/chat/1`;
		return this.httpClient.get(url);
	}	
	
  public getAssuntosResponsavel() {		
		let url: string = `http://localhost:3000/chat/2`;
		return this.httpClient.get(url);
	}	
}
