import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = []
  constructor(private foodservice: FoodService, private actroute: ActivatedRoute, private route: Router) { }
  foodimage: string | number | undefined
  a: any
  b: any
  fooditem: Foods[] = []
  ngOnInit(): void {
    //the Code for image running on top
    this.fooditem = this.foodservice.getAllDetails()
    this.foodimage = this.fooditem[11].imageUrl   
    setInterval(()=>{

      console.log(this.foodimage);
    },1000) 
    
    setInterval(() => {
      this.fooditem.forEach((item, index) => {
        this.a = item
        this.b = index
      })
      this.fooditem = this.fooditem.splice(this.a, this.b)
      for (let item of this.fooditem) {
        
        this.foodimage = item.imageUrl
      }
    }, 2000)
    setInterval(() => {
      this.fooditem = this.foodservice.getAllDetails()     
    }, 22000)
    

    //the details showing as all items
    this.actroute.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.foodservice.getAllDetails().filter(foods => foods.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
        
      } else if (params['tag']) {
        if (params['tag']) {
          this.foods = this.foodservice.getAllFoodByTags(params['tag'])
        }
      } else {
        this.foods = this.foodservice.getAllDetails()
      }
    })
    




    // let searchItem:any = this.actroute.snapshot.paramMap.get('searchItem')
    // let a = JSON.stringify({"searchItem":searchItem})
    // searchItem = JSON.parse(a)
    // console.log(searchItem)
    // if(searchItem){

    //  this.foods =  this.foodservice.getAllDetails().filter(foods=>foods.name.toLowerCase().includes(searchItem.toLowerCase()))
    // }else{
    //   this.foods = this.foodservice.getAllDetails()
    // }

  }




}
