import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimercomComponent } from './components/timercom/timercom.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [NavBarComponent,FooterComponent, SideNavComponent,HomeComponent,DashboardComponent,TimercomComponent, UsersComponent],
  imports: [
    CommonModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
