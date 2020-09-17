import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../shared/activity';

@Component({
  selector: 'app-favorite-detail',
  templateUrl: './favorite-detail.component.html',
  styleUrls: ['./favorite-detail.component.css']
})
export class FavoriteDetailComponent implements OnInit {
  
  @Input()
  activity: Activity;

  ngOnInit(): void {
  }

  public removeFromFavorites = (activityValue)=> {
    alert(activityValue.id);
  }

}
