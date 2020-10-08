import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {

  activities = [];
  selectedActivity: Activity;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    //this.activities = this.activityService.getActivities();
    this.activityService.getActivities()
      .subscribe(
        res => {
          console.log(res.activities)
          this.activities = res.activities
        },
        err => console.log(err)
      );
  }

  onSelect(activity: Activity) {
    this.selectedActivity = activity;
  }
}
