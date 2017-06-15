import { Food } from "../foods/food.model";
import { Subject } from "rxjs/Subject";
import { Http } from "@angular/http";

export class FoodService {

    foods: Food[] = [];

    foodsChanged = new Subject<Food[]>();

    addFood(food: Food) {
        this.foods.push(food);
        this.foodsChanged.next(this.foods.slice());
    }

    getFood() {
        return this.foods.slice();  
    }

    setFoods(foods: Food[]) {
        this.foods = foods;
        this.foodsChanged.next(this.foods.slice());
    }

}