import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice: CartService) { }
  quantity!:number
  ngOnInit(): void {
    setInterval(()=>{
      this.quantity = this.cartservice.cart.item.length;
    })
  }

}
