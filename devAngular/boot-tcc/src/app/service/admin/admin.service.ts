import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private httpClient: HttpClient) { }

  public getQuestoes() {
    return this.httpClient.get(`http://localhost:3000/admin`);
  }

  public remove(pId: number) {
			let questao = {        
				id: pId
			};
			let url: string = `http://localhost:3000/admin`;
			return this.httpClient.put(url, questao);
  }
  public adiciona(pId, pResposta, pPergunta, pInsereEstudante, pInsereResponsavel) {
    let questao = {        
      id: pId,
      resposta: pResposta,
      pergunta: pPergunta,
      insereEstudante:        pInsereEstudante,
      insereResponsavel:      pInsereResponsavel
    };
    return this.httpClient.put(`http://localhost:3000/admin`, questao);
  }

  public insere(pId, pPergunta, pNovo, pInsereEstudante, pInsereResponsavel) {
    let questao = {        
      id:                     pId,
      pergunta:               pPergunta,
      novo:                   pNovo,
      insereEstudante:        pInsereEstudante,
      insereResponsavel:      pInsereResponsavel
    };
    return this.httpClient.put(`http://localhost:3000/admin`, questao);
  }
}