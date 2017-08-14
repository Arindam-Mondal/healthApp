import { Component, OnInit, OnDestroy } from '@angular/core';
import { Food } from "../../foods/food.model";
import { FoodService } from "../../foods/food.service";
import { Subscription } from "rxjs/Subscription";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit,OnDestroy {

  foods: Food[] =[];
  subscription: Subscription;

  constructor(private foodService: FoodService,
              private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService.fetchFoods();
    this.subscription = this.foodService.foodsChanged.subscribe(
      (foods: Food[]) => this.foods = foods
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
