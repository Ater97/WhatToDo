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
  showEmpty: boolean = false
  currentUser = String;

  async ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      //console.log(user.username),
      this.currentUser = user.username,
        this.favoriteService.getFavorites(user.username)
          .subscribe(
            res => {
              //console.log(res[0].activities)
              this.favorites = res[0].activities,
                this.showEmpty = false
            },
            err => {
              this.showEmpty = true,
                console.log(err)
            }
          );
    })
      .catch(err => {
        this.showEmpty = true,
          console.log(err)
      });
    if (this.favorites.length < 1)
      this.showEmpty = true
  }

  onSelect(activity: FavoriteActivity) {
    this.selectedActivity = activity;
  }

  public markAsDone = (activityValue) => {
    console.log("MarkAsDone general")
    if (activityValue.completed)
      activityValue.completed = false;
    else
      activityValue.completed = true;

    console.log(this.favorites)
    this.showUpdatedItem(activityValue);
    console.log(this.favorites)
    this.favoriteService.updateFavorites(this.favorites, this.currentUser);
  }

  private showUpdatedItem(newItem) {
    let updateItem = this.favorites.find(this.findIndexToUpdate, newItem.id);
    let index = this.favorites.indexOf(updateItem);
    this.favorites[index] = newItem;
  }

  private findIndexToUpdate(newItem) {
    return newItem.id === this;
  }
}
