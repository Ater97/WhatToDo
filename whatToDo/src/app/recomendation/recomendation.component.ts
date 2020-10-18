import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../shared/activity';
import { ActivityService } from '../services/activity.service';
import { StateService, State } from '../services/state.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {

  activities = [];
  selectedActivity: Activity;
  showLoading: boolean = true
  @Input() question: (args: any) => void;
  constructor(private activityService: ActivityService, private stateService: StateService) { }

  ngOnInit() {
    //this.activities = this.activityService.getActivities();
    this.activityService.getActivities(null)
      .subscribe(
        res => {
          console.log(res.activities)
          this.activities = res.activities,
          this.showLoading = false
        },
        err => {
          this.showLoading = true,
            console.log(err)
        }
      );
  }

  onSelect(activity: Activity) {
    this.selectedActivity = activity;
  }
}
