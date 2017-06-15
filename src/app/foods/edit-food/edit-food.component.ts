import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FoodService } from "../food.service";
import { Food } from "../../foods/food.model";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  foodForm: FormGroup;
  food: Food;

  constructor(private foodService: FoodService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let name = '';
    let desc = '';
    let imagePath = '';
    let calorie = null;
    let carb = null;
    let protein = null;
    let fat = null;
    const pattern = /^[1-9]+[0-9]*$/;

    this.foodForm = new FormGroup({
      'name' : new FormControl(name,Validators.required),
      'description' : new FormControl(desc,Validators.required),
      'imagePath' : new FormControl(imagePath,Validators.required),
      'calorie' : new FormControl(calorie,[Validators.required,Validators.pattern(pattern)]),
      'carb' : new FormControl(protein,[Validators.required,Validators.pattern(pattern)]),
      'protein' : new FormControl(name,[Validators.required,Validators.pattern(pattern)]),
      'fat' : new FormControl(fat,[Validators.required,Validators.pattern(pattern)]),
    });
  }

  onSubmit() {
    this.dataStorageService.storeFoods(this.foodForm.value).subscribe(
      response => console.log(response)
    );

    this.dataStorageService.fetchFoods();
  }
}
