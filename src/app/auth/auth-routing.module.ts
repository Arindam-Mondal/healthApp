import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "app/auth/signup/signup.component";

const authRoutes: Routes =[
    { path: 'signup', component: SignupComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(authRoutes)],
    exports: [ RouterModule]
})
export class AuthRoutingModule {}