import { Injectable } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
import { FAVORITES } from '../shared/favorites';

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
  private ChuckUrl = "https://zeogv1yqwa.execute-api.us-east-1.amazonaws.com/dev/favorites/";

  constructor(private http: HttpClient) { }

  getFavorites(id:any): Observable<any>{
    console.log(this.ChuckUrl + id);
    return this.http.get(this.ChuckUrl + id).pipe(retry(3));
  }

  /*getFavorites(): FavoriteActivity[] {
    return FAVORITES;
  }*/
}
