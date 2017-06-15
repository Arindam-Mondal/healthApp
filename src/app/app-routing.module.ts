import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FoodComponent } from "app/foods/food/food.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'foods', component: FoodComponent},
    { path: '**', component: HomeComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}