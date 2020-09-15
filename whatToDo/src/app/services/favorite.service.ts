import { Injectable } from '@angular/core';
import { Activity } from '../shared/activity';
import { FAVORITES } from '../shared/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  getFavorites(): Activity[] {
    return FAVORITES;
  }
}
