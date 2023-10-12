import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  constructor(private actroute:ActivatedRoute, private foodservice:FoodService, private route:Router, private cartservice:CartService) { }
  food!:Foods
  ngOnInit(): void {
    this.actroute.params.subscribe((params)=>{
      if(params['id']){        
       this.food = this.foodservice.getfoodById(params['id'])
      }
    })
    console.log(this.food);
  }
  
  addToCart(){
    this.route.navigate(['cart-page'])
    this.cartservice.addToCart(this.food)
  }
}
