import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  
  cart!: Cart
  quantity:any
  constructor(private cartservice: CartService) { }
  ngOnInit(): void {
    this.setCart()
    console.log(this.quantity);
    
  }
  setCart() {
    this.cart = this.cartservice.getCart()
  }
  removeFromCart(cartItem: CartItem) {
    this.cartservice.removeFromCart(cartItem.food.id)
    this.setCart();
  }
  changeQuantity(cartitem:CartItem, quantityInString: string) {
    
    const quantity = parseInt(quantityInString)
    this.quantity = quantity
    
    console.log(cartitem.food.id, quantity);
    this.cartservice.changeQuantity(cartitem.food.id, quantity)
    this.setCart()
  }


}
