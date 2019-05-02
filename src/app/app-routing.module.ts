import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizeFrostopComponent } from './customize-frostop/customize-frostop.component';

const routes: Routes = [
  { path: 'customize-frostop', component: CustomizeFrostopComponent,
  data: { size: 'selectedSize', shape: 'selectedShape', flavour: 'selectedFlavour' }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
