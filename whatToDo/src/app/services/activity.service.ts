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
import { stringify } from 'querystring';
import { $$iterator } from 'rxjs/internal/symbol/iterator';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private ChuckUrl = "https://zeogv1yqwa.execute-api.us-east-1.amazonaws.com/dev/activities";

  constructor(private http: HttpClient) { }

  /*getActivities(): Activity[] {
    return ACTIVITIES;
  }*/

  getActivities(values:any): Observable<any>{
    let body = {
      participantsMax: values.participantsMax,
      participantsMin: values.participantsMin,
      budget: values.budget,
      time: values.time,
      intensity: values.intensity,
    }
    let allActivities = this.http.get(this.ChuckUrl).pipe(retry(3))
      .subscribe(data => {
        console.log(data)
      });
    return this.http.get(this.ChuckUrl).pipe(retry(3));
  }

}