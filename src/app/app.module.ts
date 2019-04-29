import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomizationComponentComponent } from './customization-component/customization-component.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CustomizeFrostopComponent } from './customize-frostop/customize-frostop.component';
import {MatGridListModule, MatCardModule} from '@angular/material';
import { MatRadioModule, MatInputModule } from '@angular/material';
import { OrdersComponent } from './orders/orders.component';
import { ActionsComponent } from './actions/actions.component';
import { BirthdayComponent } from './birthdayCakes/birthday.component';
import { AdminDashComponent } from './adminDash/adminDash.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeListComponent } from './cakes/cake-list/cake-list.component';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component';
import { CakeItemComponent } from './cakes/cake-list/cake-item/cake-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CakeStartComponent } from './cakes/cake-start/cake-start.component';
import { CakeEditComponent } from './cakes/cake-edit/cake-edit.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { CakeService } from './cakes/cake.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomizationComponentComponent,
    CustomizeFrostopComponent,
    OrdersComponent,
    ActionsComponent,
    BirthdayComponent,
    AdminDashComponent,
    CakesComponent,
    CakeListComponent,
    CakeDetailComponent,
    CakeItemComponent,
    DropdownDirective,
    CakeStartComponent,
    CakeEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
