import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization-component',
  templateUrl: './customization-component.component.html',
  styleUrls: ['./customization-component.component.css']
})
export class CustomizationComponentComponent implements OnInit {

  cakeName = 'Test Cake';
  public selectedSize: string;
  public selectedShape: string;
  public selectedFlavour: string;

  constructor() { }

  ngOnInit() {
  }

  public sSize(size: string): null {
    console.log(size);
    this.selectedSize = size;
    return null;
    }

  public sShape(shape: string): null {
    console.log(shape);
    this.selectedShape = shape;
    return null;
      }

  public sFlavour(flavour: string): null {
    console.log(flavour);
    this.selectedFlavour = flavour;
    return null;
      }

 onClickView(){}
}
