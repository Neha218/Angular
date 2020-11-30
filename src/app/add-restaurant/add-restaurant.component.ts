import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {RestaurantService} from '../restaurant.service'
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert: boolean=false;
  addRestaurant = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email])
  })
  constructor(private restaurant: RestaurantService) { }

  ngOnInit() {
  }

  collectRestaurant() {
    this.restaurant.saveRestaurant(this.addRestaurant.value).subscribe((resto) => {
      this.alert=true;
      this.addRestaurant.reset({});
    })
  }

  close() {
    this.alert=false;
  }

  get name() {return this.addRestaurant.get('name')}
  get address() {return this.addRestaurant.get('address')}
  get email() {return this.addRestaurant.get('email')}

}
