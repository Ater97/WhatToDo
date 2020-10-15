import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../shared/activity';
import { FavoriteService } from '../services/favorite.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-recomendation-detail',
  templateUrl: './recomendation-detail.component.html',
  styleUrls: ['./recomendation-detail.component.css']
})

export class RecomendationDetailComponent implements OnInit {

  @Input()
  activity: Activity;
  favorites = [];
  currentUser = String;
  currentId = String;
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
      console.log(user.username),
        this.currentUser = user.username,
        this.favoriteService.getFavorites(user.username)
          .subscribe(
            res => {
              //console.log(res[0].activities),
              this.currentId = res[0]._id,
                this.favorites = res[0].activities
            },
            err => console.log(err)
          );
    })
      .catch(err => console.log(err));
  }

  public addToFavorites = (activityValue) => {
    if (this.favorites.length < 1) { //create new favorites
      this.favoriteService.createFavorites(activityValue, this.currentUser);
    }
    else {

      let item1 = this.favorites.find(i => i.activity === activityValue.activity);
      //console.log(item1);
      if (typeof item1 === 'undefined') { //if doesnt exits add it
        let newFavorite = {
          activity: activityValue.activity,
          image: activityValue.image,
          cover: activityValue.cover,
          description: activityValue.description,
          completed: false
        }
        this.favorites.push(newFavorite)
        this.favoriteService.updateFavorites(this.favorites, this.currentUser, this.currentId);
        //console.log(activityValue.activity + ' is undefined');
      }
    }
  }
}
