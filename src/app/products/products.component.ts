import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productList : any ;
  
  // constructor(private api : ApiService, private cartService : CartService) {
  //   this.api.getProduct().subscribe((res:any)=>{
  //     this.productList = res;
  //     this.productList.forEach((a:any) => {
  //       if(a.category ==="women's clothing" || a.category ==="men's clothing"){
  //         a.category ="fashion"
  //       }
  //       Object.assign(a,{quantity:1,total:a.price});
  //     });
  //     console.log(res);
  //   });
  //  }
   constructor(private api : ApiService, private cartService : CartService) {
    this.api.getProduct().subscribe((res:any)=>{
      this.productList=res;
      console.log(res);
    });
   }
  addtocart(item: any): void{
    this.cartService.addtoCart(item);
  }
  

}