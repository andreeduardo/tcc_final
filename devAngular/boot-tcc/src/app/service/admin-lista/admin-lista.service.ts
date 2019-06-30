import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class adminListaService {
  
  constructor(private httpClient: HttpClient) { }

  public getQuestao() {
    return this.httpClient.get(`http://localhost:3000/admin-lista/1`);
  }
}
