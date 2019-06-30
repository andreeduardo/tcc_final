import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

	static nomeUsuario: string = "";

  constructor(private httpClient: HttpClient) { }

  public authenticate(usuario: string, senha: string): Observable<any> {		
		LoginService.nomeUsuario = usuario;
		try {
			let user = {
				usuario: usuario,
				senha: senha
			};
			let url: string = `http://localhost:3000/login`;
			return this.httpClient.post(url, user);
		}
		catch (e) {
			return Observable.throw(e);
		}
	}
}

