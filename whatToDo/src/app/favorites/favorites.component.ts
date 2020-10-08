import { Component, OnInit } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
import { FavoriteService } from '../services/favorite.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites = [];
  selectedActivity: FavoriteActivity;
  constructor(private favoriteService: FavoriteService) { }

  async ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      console.log(user.username),
      this.favoriteService.getFavorites(user.username)
        .subscribe(
          res => {
            console.log(res[0].activities)
            this.favorites = res[0].activities
          },
          err => console.log(err)
        );
    })
      .catch(err => console.log(err));

    /*this.favoriteService.getFavorites(this.user)
      .subscribe(
        res => {
          console.log(res[0].activities)
          this.favorites = res[0].activities
        },
        err => console.log(err)
      );*/
  }

  onSelect(activity: FavoriteActivity) {
    this.selectedActivity = activity;
  }

  public markAsDone = (activityValue: FavoriteActivity) => {
    this.onSelect(activityValue)
    if (activityValue.completed)
      activityValue.completed = false;
    else
      activityValue.completed = true;
    //alert(activityValue.id + "  " +activityValue.completed);
  }
}
