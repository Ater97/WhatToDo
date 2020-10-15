import { Component, OnInit, Input } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
import { FavoriteService } from '../services/favorite.service';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {
  constructor(private favoriteService: FavoriteService) {
  }
  favorites = [];
  @Input() activity: (args: any) => void;
  //activity: FavoriteActivity;
  currentUser = String;
  currentId = String;

  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      this.currentUser = user.username,
        this.favoriteService.getFavorites(user.username)
          .subscribe(
            res => {
              this.currentId = res[0]._id,
                this.favorites = res[0].activities
            },
            err => console.log(err)
          );
    })
      .catch(err => console.log(err));
  }


  public removeFromFavorites = (activityValue) => {
    let updateItem = this.favorites.find(this.findIndexToUpdate, activityValue.activity);
    let index = this.favorites.indexOf(updateItem);
    this.favorites.splice(index, 1);
    console.log(this.favorites)
    if (this.favorites.length < 1)
      this.favoriteService.deleteFavorites(this.currentId);
    if (this.favorites.length > 0)
      this.favoriteService.updateFavorites(this.favorites, this.currentUser, this.currentId);
      this.activity = null;
  }

  public markAsDone = (activityValue) => {
    console.log("MarkAsDone detail")
    if (activityValue.completed)
      activityValue.completed = false;
    else
      activityValue.completed = true;

    this.showUpdatedItem(activityValue);
    this.favoriteService.updateFavorites(this.favorites, this.currentUser, this.currentId);
  }

  private showUpdatedItem(newItem) {
    let updateItem = this.favorites.find(this.findIndexToUpdate, newItem.activity);
    console.log(updateItem)
    let index = this.favorites.indexOf(updateItem);
    console.log(index)
    this.favorites[index] = newItem;
  }

  private findIndexToUpdate(newItem) {
    return newItem.activity === this;
  }
}