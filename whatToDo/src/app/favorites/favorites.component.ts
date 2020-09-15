import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Activity[];
  selectedActivity: Activity;

  constructor(private favoriteService: FavoriteService) { }
  
  ngOnInit() {
    this.favorites = this.favoriteService.getFavorites();
  }

  onSelect(activity: Activity) {
    this.selectedActivity = activity;
  }
}
