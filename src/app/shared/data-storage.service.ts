import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { FoodService } from "../foods/food.service";
import { Food } from "../foods/food.model";
import 'rxjs/Rx'

@Injectable()
export class DataStorageService {

    constructor(private http: Http,
                private foodService: FoodService) {
    }

    storeFoods(food: Food) {
        return this.http.post('https://health-app-aa405.firebaseio.com/food.json', food);
    }

    fetchFoods() {
        this.http.get('https://health-app-aa405.firebaseio.com/food.json').map(
            (response: Response) => {
                const foods: Food[] = [];
                for(let key in response.json()) {
                    foods.push(response.json()[key]);
                }
                console.log("food stored:" + foods);
                return foods;
            }
        ).subscribe(
            (foods: Food[]) => {
                this.foodService.setFoods(foods);
            }
        ); 
    }
}