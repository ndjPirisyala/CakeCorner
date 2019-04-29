import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../../cake.model';


@Component({
  selector: 'app-cake-item',
  templateUrl: './cake-item.component.html',
  styleUrls: ['./cake-item.component.css']
})
export class CakeItemComponent implements OnInit {
  @Input() cake:Cake;
  @Input() index: number;
 
  
  ngOnInit() {
  }

 

}
