import { Injectable } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
import { FAVORITES } from '../shared/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  getFavorites(): FavoriteActivity[] {
    return FAVORITES;
  }
}
