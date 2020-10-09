import { Injectable } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
import { FAVORITES } from '../shared/favorites';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response } from "@angular/http"
import 'rxjs/add/operator/map';
import "rxjs/Rx";
import { map } from "rxjs/operators";
import { stringify } from 'querystring';
import { $$iterator } from 'rxjs/internal/symbol/iterator';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private ChuckUrlGet = "https://zeogv1yqwa.execute-api.us-east-1.amazonaws.com/dev/favorites/";
  private ChuckUrlPost = "https://zeogv1yqwa.execute-api.us-east-1.amazonaws.com/dev/favorite";
  private ChuckUrlPut = "https://zeogv1yqwa.execute-api.us-east-1.amazonaws.com/dev/favorites/";
  constructor(private http: HttpClient) { }

  getFavorites(id: any): Observable<any> {
    //console.log(this.ChuckUrlGet + id);
    return this.http.get(this.ChuckUrlGet + id).pipe(retry(3));
  }

  createFavorites(activityValue: any, user) {
    let body = {
      user: user,
      activities: [{
        activity: activityValue.activity,
        image: activityValue.image,
        cover: activityValue.cover,
        description: activityValue.description,
        completed: false
      }]
    }
    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    //const body = { title: 'Angular POST Request Example' };
    this.http.post(this.ChuckUrlPost, body,)//{ headers }
      .subscribe(data => {
        console.log(data)
      });
  }
  updateFavorites(activitiesValue: any, user, id) {
    let body = {
      user: user,
      activities: activitiesValue
    }
    this.http.put(this.ChuckUrlPut + id, body)//{ headers }
      .subscribe(data => {
        console.log(data)
      });
  }

  /*getFavorites(): FavoriteActivity[] {
    return FAVORITES;
  }*/
}
