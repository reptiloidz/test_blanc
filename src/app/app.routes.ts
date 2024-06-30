import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'basket', component: BasketComponent }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }