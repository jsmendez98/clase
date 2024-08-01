import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
// clearCart() {
// throw new Error('Method not implemented.');
// }
// deleteItem(arg0: any) {
// throw new Error('Method not implemented.');
// }
items:any;
item: any;
constructor(private cartService: CartService){};
clearCart() {
  this.items =  this.cartService.clearCart();
  }
  deleteItem(item : any) {
    this.cartService.deleteItem(item);

  }
  ngOnInit():void{
  this.items=this.cartService.getItems();
   }
   }
