import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../shared/activity';

@Component({
  selector: 'app-recomendation-detail',
  templateUrl: './recomendation-detail.component.html',
  styleUrls: ['./recomendation-detail.component.css']
})
export class RecomendationDetailComponent implements OnInit {

  @Input()
  activity: Activity;

  ngOnInit(): void {
  }

}
