import { Injectable } from '@angular/core';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   private items: any = [];
   constructor() { }
   addToCart(product: any){
     this.items.push(product);
   }
   getItems(){
     return this.items;
   }
   deleteItem(product:any){
    const index = this.items.findIndex((item: any) => item === product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
   clearCart(){
   this.items = []
     return this.items;
   }
//   private storageKey='cartItems';
//   addToCart (product : any){
// const items = this.getItems();
// items.push(product);
// localStorage.setItem(this.storageKey,JSON.stringify (items));
//   }
//   getItems(){
//     // ? = si no es vacio o null, : [] = si no retorne un array vacio
//   const items = localStorage.getItem(this.storageKey);
//   return items ? JSON.parse(items) : []
  
//   }
//   deleteItem(){

//   }
//   clearCart(){
//   localStorage.removeItem(this.storageKey);
//   return[];
//   }

}
