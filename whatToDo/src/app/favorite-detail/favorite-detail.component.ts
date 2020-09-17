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
  bntStyle: string = 'btn-default';

  ngOnInit(): void {
   /* if (this.activity.completed)
      this.bntStyle = 'turn-green';
    else 
      this.bntStyle = 'btn-default';*/
  }

  public removeFromFavorites = (activityValue) => {
    alert(activityValue.id);
  }

  public markAsDone(activityValue) {

    this.bntStyle = 'turn-green';
    activityValue.completed = true;
    alert(activityValue.id + "  " +activityValue.completed);
  }

}
