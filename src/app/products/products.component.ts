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