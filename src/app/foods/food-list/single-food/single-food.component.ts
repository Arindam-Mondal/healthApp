import { Component, OnInit, Input } from '@angular/core';
import { Food } from "../../../foods/food.model";

@Component({
  selector: 'app-single-food',
  templateUrl: './single-food.component.html',
  styleUrls: ['./single-food.component.css']
})
export class SingleFoodComponent implements OnInit {

  @Input() food: Food;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
