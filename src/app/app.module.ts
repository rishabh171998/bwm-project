import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { from } from 'rxjs';

import { RentalModule } from './rental/rental.module';
import { Routes,RouterModule } from '@angular/router';
import { RentalComponent } from './rental/rental.component';

const routes: Routes=[{

  path:'',
  redirectTo:'/rentals',pathMatch:'full'}


        

      



];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RentalModule,
    RouterModule.forRoot(routes)
  

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
