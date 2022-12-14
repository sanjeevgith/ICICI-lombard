import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserproductDashboardComponent } from './pages/userproduct-dashboard/userproduct-dashboard.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: ProductDashboardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "userdashboard",
    component: UserproductDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
