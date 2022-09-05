import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  public productCart: any;
  cartId: any;

  constructor(private apservice: ApiService, private activatedRoute: ActivatedRoute, private cartservice: CartService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.cartId = this.activatedRoute.snapshot.paramMap.get('id')
    this.apservice.getSingleProduct(this.cartId).subscribe(res => {
      console.log(res)
      this.productCart = res;
      Object.assign(this.productCart, { quantity: 1, total: this.productCart.price });
    });
  }

  addtocart(item: any) {
    this.cartservice.addTocart(item);
    alert("product added successfully!!!")
  }

  deleteCartItem(product: any) {
    this.cartservice.removecartItem(product)
    alert('cart item deleted!!!')
  }

  productCartbtn(item: any) {
    if (this.cartservice.checkProductExitOrNot(item) != 0) {
      return true;
    } else {
      return false;
    }
  }

}
