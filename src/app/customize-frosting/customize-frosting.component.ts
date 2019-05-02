import { Component, OnInit } from '@angular/core';
import { CustomizationService } from '../customization.service';

@Component({
  selector: 'app-customize-frosting',
  templateUrl: './customize-frosting.component.html',
  styleUrls: ['./customize-frosting.component.css']
})
export class CustomizeFrostingComponent implements OnInit {

  constructor( private data: CustomizationService ) { }

  private selectedSize = this.data.getSize();
  private selectedShape = this.data.getShape();
  private selectedFlavour = this.data.getFlavour();

  ngOnInit() {
  }

}
