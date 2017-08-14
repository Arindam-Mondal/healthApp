import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FoodComponent } from "app/foods/food/food.component";
import { FoodDetailComponent } from "./foods/food-detail/food-detail.component";
import { EditFoodComponent } from "./foods/edit-food/edit-food.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'foods', component: FoodComponent, children: [
        { path: 'new', component: EditFoodComponent},
        { path: ':id', component: FoodDetailComponent}
    ]},
    { path: '**', component: HomeComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}