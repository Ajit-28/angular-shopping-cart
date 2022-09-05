import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductlistComponent},
  {path:'cart',component:CartComponent},
  {path:'singleproduct/:id',component:SingleproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
