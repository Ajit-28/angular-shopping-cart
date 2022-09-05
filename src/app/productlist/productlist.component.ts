import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { SingleproductComponent } from '../singleproduct/singleproduct.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public productList : any;
  
  constructor( private api : ApiService, private cartservice : CartService, ) { }

  ngOnInit(): void {
    
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((add:any) => {
        Object.assign(add,{quantity:1,total:add.price});
      });
    })
  }

  addtocart(item:any){
    this.cartservice.addTocart(item);
    alert("product added successfully!!!")

  }

  deleteCartItem(product: any){
    this.cartservice.removecartItem(product)
    alert('cart item deleted!!!')
  }

  productCartbtn(item:any){
   if(this.cartservice.checkProductExitOrNot(item) != 0){
    return true;
   }else{
    return false;
   }
  }

  // openDialog(){
  //   this.dialog.open(SingleproductComponent, {
  //     width: '60%',
  //     height:'60%'
  //   })
  // }

}
