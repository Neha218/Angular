import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {RestaurantService} from '../restaurant.service'
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert: boolean=false;
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private restaurant: RestaurantService) { }

  ngOnInit() {
  }

  collectRestaurant() {
    this.restaurant.saveRestaurant(this.addRestaurant.value).subscribe((resto) => {
      this.alert=true;
      console.log("alert: ",this.alert);
      this.addRestaurant.reset({});
    })
  }

  close() {
    this.alert=false;
  }

}
