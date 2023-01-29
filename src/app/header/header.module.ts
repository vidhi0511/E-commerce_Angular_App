import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  declarations: [
    
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
