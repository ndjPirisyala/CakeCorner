import { Component, OnInit, Input } from '@angular/core';
import { CakeService } from './cake.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  //selectedCake:Cake;
  constructor(private cakeService:CakeService) { }

  ngOnInit() {
    // this.cakeService.cakeSelected.subscribe(
    //   (cake:Cake)=>{
    //     this.selectedCake=cake;
    //   }
    // );
  }
  
}
