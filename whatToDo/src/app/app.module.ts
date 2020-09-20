import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionComponent } from './question/question.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MyMaterialModule } from  './material.module';

import { RouterModule, Routes } from '@angular/router';
import { RecomendationComponent } from './recomendation/recomendation.component';
import { RecomendationDetailComponent } from './recomendation-detail/recomendation-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ActivityService } from './services/activity.service';
import { FavoriteDetailComponent } from './favorite-detail/favorite-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import { AlertComponent } from './alert/alert.component';
//import awsconfig from './aws-exports.js';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    RegistrationComponent,
    LoginComponent,
    RecomendationComponent,
    RecomendationDetailComponent,
    FavoritesComponent,
    FavoriteDetailComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule,
    
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'recomendation', component: RecomendationComponent },
      { path: 'question', component: QuestionComponent },
    ]),
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
