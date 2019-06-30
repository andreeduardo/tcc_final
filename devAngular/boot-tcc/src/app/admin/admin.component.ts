import { Component, OnInit } from '@angular/core';
import { AdminService } from './../service/admin/admin.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  public arrQuestoes = [{}];
  constructor(private router : Router,
              private adminService: AdminService) { }

  remove(id: number) {
    this.adminService.remove(id).subscribe();
    location.reload();
  }

  adiciona(id: number, resposta: string, pergunta: string, checkEstudante: string, checkResponsavel: string) {  
    this.adminService.adiciona(id, resposta, pergunta, checkEstudante, checkResponsavel).subscribe();
    location.reload();
    
  }
  insere(id: number, pergunta: string, novo: string, checkEstudante: string, checkResponsavel: string) {
    this.adminService.insere(id, pergunta, novo, checkEstudante, checkResponsavel).subscribe();
    location.reload();
  }

  
  ngOnInit() {
    this.adminService.getQuestoes().subscribe(
      res => {
        this.arrQuestoes = res["rows"];     
        if (this.arrQuestoes.length > 0) {
          this.arrQuestoes.forEach((value, i) => {
            this.arrQuestoes[i]["novo"] = '';
            this.arrQuestoes[i]["checkEstudante"] = true;
            this.arrQuestoes[i]["checkResponsavel"] = true;
          });
        }   
      });
  }
}
