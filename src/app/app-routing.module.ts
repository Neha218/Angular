import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component'
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component'
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  {
    path: 'add',
    component: AddRestaurantComponent
  },
  {
    path: 'update',
    component: UpdateRestaurantComponent
  },
  {
    path: 'list',
    component: ListRestaurantComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
