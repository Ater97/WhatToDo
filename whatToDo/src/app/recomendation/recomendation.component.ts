import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {

  activities: Activity[];
  selectedActivity: Activity;

  constructor(private activityService: ActivityService) { }
  
  ngOnInit() {
    this.activities = this.activityService.getActivities();
  }

  onSelect(activity: Activity) {
    this.selectedActivity = activity;
  }
}
