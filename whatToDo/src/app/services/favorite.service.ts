import { Injectable } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
import { FAVORITES } from '../shared/favorites';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {



  private ChuckUrl = "https://zeogv1yqwa.execute-api.us-east-1.amazonaws.com/dev/favorites/{id}";
  
  constructor() { }

  getFavorites(): FavoriteActivity[] {
    return FAVORITES;
  }
}
