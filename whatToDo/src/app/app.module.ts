import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './question/question.component';
import { RegistrationComponentComponent } from './registration/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from  './material.module';
import { RouterModule, Routes } from '@angular/router';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { RecomendationDetailComponent } from './recomendation-detail/recomendation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    RecomendationComponent,
    RecomendationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
       
     
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
