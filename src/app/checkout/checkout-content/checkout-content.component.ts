import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-checkout-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout-content.component.html',
  styleUrl: './checkout-content.component.css'
})
export class CheckoutContentComponent {
  items:any;
  constructor(private cartService: CartService){};
    ngOnInit():void{
    this.items=this.cartService.getItems();
  }
}
