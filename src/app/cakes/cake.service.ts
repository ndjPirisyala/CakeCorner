import {Cake} from './cake.model';
import { EventEmitter, Injectable } from '../../../node_modules/@angular/core';
import { Feature } from '../shared/feature.model';
import { Subject } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
@Injectable({providedIn:'root'})
export class CakeService{
    cakeSelected=new EventEmitter<Cake>();
    cakesChanged=new Subject<Cake[]>();
    private cakes:Cake[]=[ 
    
        //  new Cake('Test Cake','birthday',1200,'https://www.logolynx.com/images/logolynx/82/829ba7822e43ebe89394d1ecbbf152b7.jpeg','This is some test description bjdjbxhbxh ',[new Feature('bhghg'),new Feature('bhhh')]),
        //  new Cake('Test Cake','birthday',1200,'http://www.betterlifeomaha.com/wp-content/uploads/2018/04/wonderful-design-cake-for-birthday-round-chocolate.jpg','This is some test description bjdjbxhbxh ',[new Feature('hghgg')])
      ];

      constructor( private http:HttpClient){}
      getCakes(){
          this.http.get<{message:string,cakes:Cake[]}>('http://localhost:3000/adminDash/cakes')
          .subscribe((cakeData)=>{
            this.cakes=cakeData.cakes;
            this.cakesChanged.next([...this.cakes]);
          });
         // return this.cakes.slice();
      }
      getCake(id:number){
        return this.cakes[id];
      }
      addCake(cake:Cake){
          this.cakes.push(cake);
          this.cakesChanged.next(this.cakes.slice());
      }
      updateCake(index:number,newCake:Cake){
          this.cakes[index]=newCake;
          this.cakesChanged.next(this.cakes.slice());
      }
      deleteCake(index:number){
        this.cakes.splice(index,1);
        this.cakesChanged.next(this.cakes.slice());
      }
}