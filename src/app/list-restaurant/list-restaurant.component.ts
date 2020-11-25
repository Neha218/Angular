import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {

  constructor(private restaurant: RestaurantService) { }
  restaurantCollection = {};
  ngOnInit() {
    this.restaurant.getList().subscribe((resto) => {
      console.log(resto);
      this.restaurantCollection = resto;
    })
  }

}
