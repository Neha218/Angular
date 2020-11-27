import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  constructor(private restaurant: RestaurantService) { }
  restaurantCollection: any = [];
  loadingIndicator = true;
  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.loadingIndicator = true;
    this.restaurant.getList().subscribe((resto) => {
      this.restaurantCollection = resto;
      this.loadingIndicator = false;
    },
    (error: any) => {
      console.warn(error);
      this.loadingIndicator = false;
    })
  }

  deleteRestaurant(id) {
    this.loadingIndicator = true;
    this.restaurant.deleteRestaurant(id).subscribe((result)=> {
      this.restaurantCollection.splice(id-1,1);
      this.loadingIndicator = false;
    })
  }

  refreshGrid() {
    this.loadingIndicator = true;
    this.getAllRestaurants();
  }

}
