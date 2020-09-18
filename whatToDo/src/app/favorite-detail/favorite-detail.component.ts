import { Component, OnInit, Input } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {

  @Input()
  activity: FavoriteActivity;
  
  ngOnInit(): void {
   /* if (this.activity.completed)
      this.bntStyle = 'turn-green';
    else 
      this.bntStyle = 'btn-default';*/
  }


  public removeFromFavorites = (activityValue) => {
    alert(activityValue.id);
  }

  public markAsDone =(activityValue) => {
    if(activityValue.completed)
      activityValue.completed = false;
    else
      activityValue.completed = true;
    alert(activityValue.id + "  " +activityValue.completed);
  }

}