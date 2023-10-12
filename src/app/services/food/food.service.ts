import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { tags } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor() { };
  
  getfoodById(id:number):Foods{    
    return this.getAllDetails().find(food => food.id == id)!
  }
  
  getAllFoodByTags(tag:string):Foods[]{
    return tag === "All"? 
    this.getAllDetails(): this.getAllDetails().filter(foods=> foods.tags?.includes(tag))
    
  }
  getAllCountBytag(tag:string):Foods[]{
    return tag === "All"? 
    this.getAllDetails(): this.getAllDetails().filter(foods=> foods.tags?.includes(tag))
    
  }
   
  getAllTags():tags[]{
    return [
      {name:"All", counts:10},
      {name:"FastFood", counts:4},
      {name:"Pizza", counts:3},
      {name:"Lunch", counts:5},
      {name:"SlowFood", counts:6},
      {name:"Hamburger", counts:7},
      {name:"Fry", counts:2},
      {name:"Soup", counts:7}
    ]
  }
  getAllDetails():Foods[] {
    return [
      {
        id: 1,
        price: 150,
        name: "The Belgian Waffle Co",
        favorite: true,
        star: 4.5,
        tags: ["Hamburger","Fry","Soup"],
        imageUrl: '/assets/image1.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },

      {
        id: 2,
        price: 150,
        name: "Vegitable Kebab",
        favorite: true,
        star: 1,
        tags: ["Lunch","SlowFood"],
        imageUrl: '/assets/image2.avif',
        coockTime: '15-20',
        origins:['belgium', 'pakistan', 'india']
      },
      {
        id: 3,
        price: 150,
        name: "Veg Indian Pulao",
        favorite: false,
        star: 3,
        tags: ["FastFood","Pizza"],
        imageUrl: '/assets/image3.avif',
        coockTime: '15-20',
        origins:['europe', 'france', 'india']
      },
      {
        id: 4,
        price: 150,
        name: "Chicken Nuggets",
        favorite: true,
        star: 2.5,
        tags: ["Fry","Soup"],
        imageUrl: '/assets/image4.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'japan']
      },
      {
        id: 5,
        price: 150,
        name: "Chicken Burger",
        favorite: false,
        star: 3,
        tags: ["SlowFood","Hamburger","Fry"],
        imageUrl: '/assets/image5.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },
      {
        id: 6,
        price: 150,
        name: "italian cake",
        favorite: true,
        star: 3.5,
        tags: ["Lunch","SlowFood"],
        imageUrl: '/assets/image6.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },
      {
        id: 7,
        price: 150,
        name: "Pizza",
        favorite: false,
        star: 4,
        tags: ["FastFood","Pizza","Lunch"],
        imageUrl: '/assets/image7.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },
      {
        id: 8,
        price: 150,
        name: "veg thali",
        favorite: true,
        star: 4.4,
        tags: ["Lunch","SlowFood"],
        imageUrl: '/assets/image8.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },
      {
        id: 9,
        price: 150,
        name: "Shaahi Paneer",
        favorite: true,
        star: 5,
        tags: ["SlowFood","Hamburger","Fry"],
        imageUrl: '/assets/image9.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },
      {
        id: 10,
        price: 150,
        name: "Chicken tandoori",
        favorite: false,
        star: 3.2,
        tags: ["SlowFood","Hamburger","Fry"],
        imageUrl: '/assets/image10.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },
      {
        id: 11,
        price: 150,
        name: "Shaahi Paneer",
        favorite: true,
        star: 5,
        tags: ["SlowFood","Hamburger","Fry"],
        imageUrl: '/assets/image9.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      },
      {
        id: 12,
        price: 150,
        name: "Pizza",
        favorite: false,
        star: 4,
        tags: ["FastFood","Pizza","Lunch"],
        imageUrl: '/assets/image7.avif',
        coockTime: '15-20',
        origins:['belgium', 'france', 'india']
      }
    ]
    
  }
}

