import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { tags } from '../shared/models/tag';
import { ActivatedRoute } from '@angular/router';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  childTags?: string;
  @Input()
  justifyContent: string = 'center';


  tags?: tags[] = []
  constructor(private foodservice: FoodService, private actroute: ActivatedRoute) { }

  ngOnInit(): void {
    let a: any = []

    if (!this.childTags) {
      this.tags = this.foodservice.getAllTags()
      let count1 = this.foodservice.getAllDetails()

      let countStr = JSON.stringify(count1).toLowerCase()
      let newFood = JSON.parse(countStr)

      this.tags.forEach((item) => {

        let count = newFood.filter((food:Foods)=>food.tags?.includes(item.name.toLowerCase()))

        a.push({ name: item.name, count: count.length })

      })
      for (let tag of a) {

        if (tag.name === "All") {
          tag.count = this.foodservice.getAllDetails().length
        } else {
          this.tags = a
        }
      }
    }
  }

  /**
   * destructuring
   * 
   */
}