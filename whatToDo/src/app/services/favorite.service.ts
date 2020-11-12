import { Injectable } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
//import { FAVORITES } from '../shared/favorites';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import "rxjs/Rx";


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private ChuckUrl = "https://zeogv1yqwa.execute-api.us-east-1.amazonaws.com/dev/favorites";

  constructor(private http: HttpClient) { }

  getFavorites(id: any): Observable<any> {
    //console.log(this.ChuckUrlGet + id);
    return this.http.get(this.ChuckUrl + '/' + id).pipe(retry(3));
  }

  createFavorites(activityValue: any, user) {
    let body = {
      user: user,
      activities: [{
        activity: activityValue.activity,
        image: activityValue.image,
        cover: activityValue.cover,
        description: activityValue.description,
        budget: activityValue.budget,
        completed: false
      }]
    }
    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    //const body = { title: 'Angular POST Request Example' };
    this.http.post(this.ChuckUrl, body,)//{ headers }
      .subscribe(data => {
        console.log(data)
      });
  }
  updateFavorites(activitiesValue: any, user, id) {
    let body = {
      user: user,
      activities: activitiesValue
    }
    this.http.put(this.ChuckUrl + '/' + id, body)//{ headers }
      .subscribe(data => {
        console.log(data)
      });
  }

  deleteFavorites(id){
    this.http.delete(this.ChuckUrl + '/' + id)//{ headers }
      .subscribe(data => {
        console.log(data)
      });
  }
  /*getFavorites(): FavoriteActivity[] {
    return FAVORITES;
  }*/
}
