import { Injectable } from '@angular/core';
import { Activity, IActivity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response } from "@angular/http"
import 'rxjs/add/operator/map';
import "rxjs/Rx";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private ChuckUrl = "https://uwj4hwj86j.execute-api.us-east-1.amazonaws.com/dev/hello";

  constructor(private http: HttpClient) { }

  /*getActivities(): Activity[] {
    return ACTIVITIES;
  }*/

  getActivities(): Observable<any>{
    return this.http.get(this.ChuckUrl).pipe(retry(3));
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}