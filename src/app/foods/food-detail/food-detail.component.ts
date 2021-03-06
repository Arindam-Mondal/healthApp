import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Food } from "../../foods/food.model";
import { FoodService } from "app/foods/food.service";

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food: Food;
  id: number;

  constructor(private route: ActivatedRoute,
              private foodService: FoodService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.food = this.foodService.getFood(this.id);
      }
    );
  }
}
