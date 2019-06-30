import { ChatComponent } from "src/app/chat/chat.component";
import { LoginComponent } from "src/app/login/login.component";
import { CadastrarComponent } from "src/app/cadastrar/cadastrar.component";
import { AdminComponent } from "src/app/admin/admin.component";
import { AdminListaComponent } from "src/app/admin-lista/admin-lista.component";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'chat', component: ChatComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: CadastrarComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin-lista/:id', component: AdminListaComponent },
    {path : '', component : LoginComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }