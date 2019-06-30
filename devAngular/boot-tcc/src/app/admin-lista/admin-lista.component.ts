import { Component, OnInit } from '@angular/core';
import { adminListaService } from './../service/admin-lista/admin-lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-lista',
  templateUrl: './admin-lista.component.html',
  styleUrls: ['./admin-lista.component.css']
})
export class AdminListaComponent implements OnInit {

  constructor(public router : Router,
              public adminListaService: adminListaService) { }

  public objQuestao = {};
  public id = '';

  ngOnInit() {
    this.adminListaService.getQuestao().subscribe(
      res => {
        console.log(res['rows'][0]);
        this.objQuestao = res['rows'][0];
    });
  }

}
