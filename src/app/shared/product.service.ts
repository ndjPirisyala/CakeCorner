import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectProduct: Product;
  product: Product[];
  readonly baseURL='http://localhost:3000/view_history';
  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(this.baseURL);
}


}
