import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {

  activities: Activity[] = ACTIVITIES;
  selectedActivity: Activity;

  ngOnInit(): void {
  }
  
  onSelect(activity: Activity) {
    this.selectedActivity = activity;
  }

}
