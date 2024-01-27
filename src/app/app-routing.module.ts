import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/helpers/guard/auth.guard';





const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'},
 {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./base/base.module').then(m => m.BaseModule), canActivate:[AuthGuard]
 }

   
   
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
