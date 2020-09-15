import { Injectable } from '@angular/core';
import { Activity } from '../shared/activity';
import { ACTIVITIES } from '../shared/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getActivities(): Activity[] {
    return ACTIVITIES;
  }
}
