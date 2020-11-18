import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Activity } from '../shared/activity';
import { ActivityService } from '../services/activity.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionForCreation } from '../shared/questionForCreation';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {

  activities = [];
  selectedActivity: Activity;
  showEmpty: boolean = false
  showLoading: boolean = true
  questionAsked: QuestionForCreation = {
    participants: +this.route.snapshot.paramMap.get('participants'),
    budget: +this.route.snapshot.paramMap.get('budget'),
    time: +this.route.snapshot.paramMap.get('time'),
    intensity: (+this.route.snapshot.paramMap.get('intensity') == 1) ? "low" : (+this.route.snapshot.paramMap.get('intensity') == 2) ? "normal" : "hardcore"
  }

  @Input() question: (args: any) => void;
  constructor(private activityService: ActivityService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.activities = this.activityService.getActivities();
    this.activityService.getActivities(null)
      .subscribe(
        res => {
          this.filterActivities(res.activities),
            //console.log(res.activities),
            //this.activities = res.activities,
            this.showLoading = false
          //this.showEmpty = false
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

  filterActivities(activitiesArr: Activity[]) {
    //console.log(activitiesArr)
    let question: QuestionForCreation = {
      participants: +this.route.snapshot.paramMap.get('participants'),
      budget: +this.route.snapshot.paramMap.get('budget'),
      time: +this.route.snapshot.paramMap.get('time'),
      intensity: (+this.route.snapshot.paramMap.get('intensity') == 1) ? "low" : (+this.route.snapshot.paramMap.get('intensity') == 2) ? "normal" : "hardcore"
    }
    //console.log(question);
    let i = -1
    let actiivitiesToShow = activitiesArr.filter(
      activityToShow => activityToShow.intensity == question.intensity && activityToShow.budget <= question.budget && activityToShow.time <= question.time 
      && activityToShow.participantsMax >= question.participants && activityToShow.participantsMin <= question.participants
    )
    //console.log(actiivitiesToShow)
    this.fillActivities(actiivitiesToShow)
  }

  fillActivities(activitiesArr = []) {
    console.log(activitiesArr)
    if (activitiesArr.length >= 5) {
      let randomArr = this.getRandomArray(activitiesArr.length, 5)
      console.log(randomArr)
      for (let i in randomArr) {
        this.activities.push(activitiesArr[randomArr[i]])
      }
      //console.log(this.activities)
    }
    else {
      if (activitiesArr.length == 0) {
        console.log("try again")
        this.showEmpty = true
      }
      else {
        //this.activities = activitiesArr
        let randomArr = this.getRandomArray(activitiesArr.length, activitiesArr.length)
        console.log(randomArr)
        for (let i in randomArr) {
          this.activities.push(activitiesArr[randomArr[i]])
        }
      }
    }

  }

  getRandomArray(lenght: number, k: number) {
    let random = [];
    for (let i = 0; i < k; i++) {
      let num = Math.floor(Math.random() * (lenght));
      if (random.indexOf(num) < 0) {
        random.push(num)
      }
      else {
        i--
      }
    }
    return random;
  }
}