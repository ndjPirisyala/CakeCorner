import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../customization.service';

@Component({
  selector: 'app-customize-topping',
  templateUrl: './customize-topping.component.html',
  styleUrls: ['./customize-topping.component.css']
})
export class CustomizeToppingComponent implements OnInit {

  constructor( private data: CustomizationService ) { }

  private selectedSize = this.data.getSize();
  private selectedShape = this.data.getShape();
  private selectedFlavour = this.data.getFlavour();

  ngOnInit() {
  }

}
