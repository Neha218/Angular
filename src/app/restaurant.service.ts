import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
url = 'http://localhost:3000/restaurants';
  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get(this.url);
  }

  saveRestaurant(data) {
    console.log("\ndata: \n",data);
    return this.http.post(this.url, data);
  }

  deleteRestaurant(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getSelectedResturant(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateResturant(id, data) {
    return this.http.put(`${this.url}/${id}`,data);
  }
}