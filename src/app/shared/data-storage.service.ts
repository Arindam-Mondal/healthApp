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
                const foods: Food[] = response.json();
                console.log(foods);
                return foods;
            }
        ).subscribe(
            (foods: Food[]) => {
                this.foodService.setFoods(foods);
            }
        ); 
    }
}