import { Injectable, Input } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart:Cart = new Cart()
  @Input() quantity!:number
  addToCart(food:Foods){
    let cartItem = this.cart.item.find(item =>item.food.id === food.id) 
    if(cartItem){

      this.changeQuantity(food.id, cartItem.quantity +1)
      return
    }
    this.cart.item.push(new CartItem(food));
    this.quantity = this.cart.item.length;
    
  }
  removeFromCart(foodid:number){
     this.cart.item = this.cart.item.filter(item=>item.food.id !== foodid )   
  }
  changeQuantity(foodid:number, quantity:number){
    console.log(quantity, foodid);
    
    let cartItem = this.cart.item.find(item=> item.food.id === foodid)
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart
  }
}
