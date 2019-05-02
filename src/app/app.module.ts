import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomizationComponentComponent } from './customization-component/customization-component.component';

import { CustomizeFrostingComponent } from './customize-frosting/customize-frosting.component';
import {MatGridListModule, MatCardModule} from '@angular/material';
import { MatRadioModule, MatInputModule } from '@angular/material';
import { CustomizeToppingComponent } from './customize-topping/customize-topping.component';
import { CustomizedCakeViewComponent } from './customized-cake-view/customized-cake-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomizationComponentComponent,
    CustomizeFrostingComponent,
    CustomizeToppingComponent,
    CustomizedCakeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
