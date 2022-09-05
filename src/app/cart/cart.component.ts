import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal! : number;
  public qty! : number;

  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
  }

  removeItem(item:any){
    this.cartservice.removecartItem(item)
  }

  emptyCart(){
    this.cartservice.removeAllCart();
  }

  productQty(action:string, item:any){
    this.cartservice.setQuantity(action,item);
    this.grandTotal = this.cartservice.getTotalPrice();
  }

}
