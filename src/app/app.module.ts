import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductlistComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductlistComponent,
    CartComponent,
    SingleproductComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatBadgeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
