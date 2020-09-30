import { Injectable } from '@angular/core';
import { Activity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Http } from "@angular/http"
import 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private ChuckUrl = "https://uwj4hwj86j.execute-api.us-east-1.amazonaws.com/dev/hello";

  constructor(private http: HttpClient) { }

  getActivities(): Activity[] {
    return ACTIVITIES;
  }

  activities: Activity[] = [];
  
  /*public getActivities(): Observable<Activity[]> { //Activity[] 
    var obj = this.http.get<Activity[]>(this.ChuckUrl);

    obj.subscribe(val => console.log(val),
        error => console.log("error"),
        () => console.log("complete"));

    return this.http.get<Activity[]>(this.ChuckUrl)
  }*/

    //obj.subscribe(val => this.activities.push(val))
    //console.log(this.activities);

      //this.activityService.getActivities().subscribe(val => (this.activities.push(val)));

    //this.activityService.getActivities().forEach(((value: Activity) => this.activities.push(value)));

    //this.activityService.getActivities().subscribe(this.addActivity);
    /*this.activityService.getActivities()
      .subscribe(val => console.log(val),
        error => console.log("error"),
        () => console.log("complete"));*/

    //this.activityService.getActivities().subscribe(val => this.activities.push(val));
    //this.activityService.getActivities().forEach(((value: Activity) => this.activities.push(value)));
    /*this.activityService.getActivities().subscribe(val => this.activities.push( {
      _id: val._id,
      name: val.name,
      image: val.image,
      cover: val.cover,
      description: val.description
    }
    ));*/
}
