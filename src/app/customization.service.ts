import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {

  constructor() { }

  private selectedSize: string;
  private selectedShape: string;
  private selectedFlavour: string;

  public getSize(): string{
    return this.selectedSize;
  }
  public getShape(): string{
    return this.selectedShape;
  }
  public getFlavour(): string{
    return this.selectedFlavour;
  }

  public setSize(size: string): null{
    this.selectedSize = size;
    return null;
  }
  public setShape(shape: string): null{
    this.selectedSize = shape;
    return null;
  }
  public setFlavour(flavour: string): null{
    this.selectedFlavour = flavour;
    return null;
  }
}
