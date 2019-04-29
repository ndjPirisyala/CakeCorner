import { Feature } from '../shared/feature.model';

export class Cake{
     public name:string;
     public category:string;
     public price:number;
     public imagePath:string;
     public description:string;
     public features:Feature[];

     constructor(name:string,
        cat:string,prc:number,img:string,desc:string,
        features:Feature[]
    ){
        this.name=name;
        this.category=cat;
        this.price=prc;
        this.imagePath=img;
        this.description=desc;
        this.features=features;
     }
}