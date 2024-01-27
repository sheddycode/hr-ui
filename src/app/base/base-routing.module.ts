import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}
