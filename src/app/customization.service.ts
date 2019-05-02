import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {

  constructor() { }

  private selectedSize: string;
  private selectedShape: string;
  private selectedFlavour: string;

  getSize(){
    return this.selectedSize;
  }
  getShape(){
    return this.selectedShape;
  }
  getFlavour(){
    return this.selectedFlavour;
  }

  setSize(size: string){
    this.selectedSize = size;
  }
  setShape(shape: string){
    this.selectedSize = shape;
  }
  setFlavour(flavour: string){
    this.selectedFlavour = flavour;
  }
}
