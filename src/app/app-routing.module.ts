import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdayComponent } from './birthdayCakes/birthday.component';
import { ActionsComponent } from './actions/actions.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
   { path:'gallery',component:BirthdayComponent},
   { path:'adminDash',component:ActionsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
