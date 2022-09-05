import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setQuantity(action: string, item: any) {

    if (action === "+") {
      this.cartItemList.map((a: any, index: any) => {
        if (item.id === a.id) {
          item.quantity = item.quantity + 1;
          if (item.quantity == 2) {
            item.total = item.total * item.quantity;
          } else {
            item.total = (item.total / (item.quantity - 1)) * item.quantity;
          }
          this.cartItemList[index] = item;
        }
      });
    }
    else if (action === "-") {
      this.cartItemList.map((a: any, index: any) => {
        if (item.id === a.id && (1 <= item.quantity)) {
          if (item.quantity != 1) {
            item.quantity = item.quantity - 1;
            item.total = (item.total / (item.quantity + 1)) * item.quantity;
          }
          this.cartItemList[index] = item;
        }
      });
    }
  }

  addTocart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((add: any) => {
      grandTotal += add.total;
    })
    return grandTotal;
  }

  removecartItem(product: any) {
    this.cartItemList.map((add: any, index: any) => {
      if (product.id === add.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }

  checkProductExitOrNot(product:any){
    let num: number = 0;
    this.cartItemList.map((add:any, index:any)=>{
      if(add.id === product.id){
        num = index + 1;
      }
    });
    return num;
  }


}
