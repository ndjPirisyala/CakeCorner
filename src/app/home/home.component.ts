import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductService]
})
export class HomeComponent implements OnInit {

  constructor(public UserProfileService: ProductService, private router: Router) { }

  ngOnInit() {
     this.ProductList();
  }

  ProductList()
  { 
    this.UserProfileService.getProductList().subscribe((res)=> {
      this.UserProfileService.product= res as Product[];
    });
  }
}
