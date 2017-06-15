import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropDwonDirective } from "app/shared/dropdown.directive";
import { FoodListComponent } from './foods/food-list/food-list.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { FoodComponent } from './foods/food/food.component';
import { EditFoodComponent } from './foods/edit-food/edit-food.component';
import { FoodService } from "./foods/food.service";
import { DataStorageService } from "./shared/data-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDwonDirective,
    FoodListComponent,
    HomeComponent,
    FoodComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    FoodService, 
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
