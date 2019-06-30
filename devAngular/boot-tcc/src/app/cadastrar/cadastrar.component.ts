import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarService } from './../service/cadastrar/cadastrar.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  papelsel: string;
  arrPapeis: string[] = ['Estudante', 'Responsável'];

  public name : string = "";
  public username : string = "";
  public password : string = "";
  public exceptionMessage: string;
  public sucessMessage: string;

  public cadastrar(){
    this.cad.cadastrar(this.name, this.username, this.password, this.papelsel).subscribe(response => {
      if (response.success) {
        this.sucessMessage = 'Usuário cadastrado :D';
        this.router.navigate(["login"]);
      } else {
        this.exceptionMessage = 'Erro ao cadastrar o usuário';
      }
    }, () => {
      this.exceptionMessage = 'Erro ao cadastrar o usuário';
    });
  }

  constructor(private router : Router,
              private cad: CadastrarService) { }

  ngOnInit() {
  }

}
