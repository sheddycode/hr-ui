import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
 {path: '', redirectTo: 'register', pathMatch: 'full'},
{path: "register", component: RegisterComponent},
{path:"login", component: LoginComponent},
{path: "employee-dashboard", component: DashboardComponent},
{path: 'home-page', component: HomeComponent}
   
   
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
