import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  updateRestaurant = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email])
  })
  constructor(private router: ActivatedRoute, private resto: RestaurantService) { }

  ngOnInit() {
    this.resto.getSelectedResturant(this.router.snapshot.params.id).subscribe(result => {
      this.updateRestaurant = new FormGroup({
        name: new FormControl(result['name'],Validators.required),
        address: new FormControl(result['address'],Validators.required),
        email: new FormControl(result['email'],[Validators.required,Validators.email])
      })
    })
  }

  update() {
    this.resto.updateResturant(this.router.snapshot.params.id, this.updateRestaurant.value).subscribe(result => {
      this.alert = true;
      console.warn(result)
    })
  }

  close() {
    this.alert = false;
  }

  get name() {return this.updateRestaurant.get('name')}
  get email() {return this.updateRestaurant.get('email')}
  get address() {return this.updateRestaurant.get('address')}

}
