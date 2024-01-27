import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from './auth/helpers/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
