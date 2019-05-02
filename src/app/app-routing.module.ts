import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizeFrostingComponent } from './customize-frosting/customize-frosting.component';
import { CustomizeToppingComponent } from './customize-topping/customize-topping.component';

const routes: Routes = [
  { path: 'customize-frosting', component: CustomizeFrostingComponent },
  { path: 'customize-topping', component: CustomizeToppingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
