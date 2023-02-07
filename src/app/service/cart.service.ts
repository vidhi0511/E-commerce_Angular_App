import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any=[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  getTotalPrice(){
    let grandtotal =0;
    this.cartItemList.map((a:any)=>{
      grandtotal += a.total;
    })
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id)
    })
  }
}
