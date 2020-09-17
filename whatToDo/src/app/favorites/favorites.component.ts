import { Component, OnInit } from '@angular/core';
import { FavoriteActivity } from '../shared/favoriteActivity';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: FavoriteActivity[];
  selectedActivity: FavoriteActivity;

  constructor(private favoriteService: FavoriteService) { }
  
  ngOnInit() {
    this.favorites = this.favoriteService.getFavorites();
  }

  onSelect(activity: FavoriteActivity) {
    this.selectedActivity = activity;
  }
}
