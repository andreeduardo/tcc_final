import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing.module';
import { ChatComponent } from './chat/chat.component';
import { MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatGridListModule, MatInputModule, MatListModule, MatIconModule, MatSidenavModule, MatTooltipModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {A11yModule} from '@angular/cdk/a11y';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTreeModule,
} from '@angular/material';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListaComponent } from './admin-lista/admin-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CadastrarComponent,
    AdminComponent,
    AdminListaComponent
  ],
  imports: [
    MatRadioModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    LoginModule,
    AppRoutingModule,
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule
  ],
  
exports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule,   
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule
],
  providers: [
    LoginService,
    LoginComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
