import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  constructor(private httpClient: HttpClient) { }

  public cadastrar(nome: string, usuario: string, senha: string, papel: string): Observable<any> {
		try {
			let user = {        
				usuario: usuario,
				senha: senha,
				nome: nome,
        papel: papel
			};
			let url: string = `http://localhost:3000/cadastrar`;
			return this.httpClient.post(url, user);
		}
		catch (e) {
			return Observable.throw(e);
		}
	}
}
