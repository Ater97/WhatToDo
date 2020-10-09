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
  constructor(private favoriteService: FavoriteService) { }
  favorites = [];

  @Input()
  activity: FavoriteActivity;
  currentUser = String;

  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      console.log(user.username),
        this.currentUser = user.username,
        this.favoriteService.getFavorites(user.username)
          .subscribe(
            res => {
              console.log(res),
                console.log(res[0].activities),
                this.favorites = res[0].activities
            },
            err => console.log(err)
          );
    })
      .catch(err => console.log(err));
  }


  public removeFromFavorites = (activityValue) => {
    //alert(activityValue.id);
  }

  public markAsDone = (activityValue) => {
    console.log("MarkAsDone detail")
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