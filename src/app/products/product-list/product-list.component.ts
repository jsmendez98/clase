import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import id from '@angular/common/locales/id';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { RouterModule } from '@angular/router';
import bootstrap from '../../../main.server';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
deleteItem(_t3: Product) {
throw new Error('Method not implemented.');
}
  ProductId!:number;
  selectedProduct: Product | undefined;
productList: Product[] = [];
// constructor (private productService:ProductService, private cartService: CartService){}

// ngOnInit():void{
//   this.productList = this.productService.getProducts()
// }
// addToCart(product: any) {
//     this.cartService.addToCart(product);
//     window.alert('agregaste el producto'+ product.name)
// }
// getProductById (){
//   if (this.ProductId){
//      this.selectedProduct = this.productService.getProductsById(this.ProductId)
//   }
// }
// }
constructor(private productService :ProductService,private cartService: CartService) {}
 
  ngOnInit(): void{
    this.productService.getProducts().subscribe((data:Product[]) =>{
this.productList=data; 
    });
  }
  getProductById(){
if (this.ProductId){
  this.productService.getProductsById(this.ProductId). subscribe(data =>{
    this.selectedProduct=data;
  });
}
}
addToCart(product: any) {
     this.cartService.addToCart(product);
     window.alert('agregaste el producto'+ product.name)
}

}
