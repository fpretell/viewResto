import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRestaurantComponent } from "./list-restaurant/list-restaurant.component";

const routes: Routes = [
  { path: 'list-restaurants', component: ListRestaurantComponent },
  { path:  '', redirectTo:  'list-restaurants', pathMatch:  'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
