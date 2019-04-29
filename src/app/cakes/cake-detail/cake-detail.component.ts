import { Component, OnInit } from '@angular/core';
import { Cake } from '../cake.model';
import { CakeService } from '../cake.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  cake:Cake;
  id:number;
  constructor(private cakeService:CakeService,
  private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.cake=this.cakeService.getCake(this.id);
      }
    );
  }

  onEditCake(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteCake(){
    this.cakeService.deleteCake(this.id);
    this.router.navigate(['/cakes']);
  }

  

}
