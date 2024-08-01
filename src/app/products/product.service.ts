import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {  
  // private productList:Product[] = [
  //   {id:1, name: "producto 1", description: "descripcion producto 1", price:100, imageUrl:"../assets/imagenes/Product1"},
  //   {id:2, name: "producto 2", description: "descripcion producto 2", price:200, imageUrl:"../assets/imagenes/Product2"}
  // ];
  // getProducts():Product[]{
  //   return this.productList;
  // }
  // getProductsById(id: number): Product | undefined{
  //   return this.productList.find(resultProduct => resultProduct.id == id);
  // } 

  //consumo de api

  private apiUrl= 'https://fakestoreapi.com/products';
  constructor (private http: HttpClient){}
  getProducts(): Observable <Product[]>{
return this.http.get<any[]>(this.apiUrl)
  }

getProductsById(id:number): Observable <Product>{
  return this.http.get<Product>(`${this.apiUrl}/${id}`);
}
}