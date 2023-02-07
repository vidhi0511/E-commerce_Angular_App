import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  //prperty for storing all the product lists
  // public productList : any;

  // constructor(private api: ApiService) { }

  // ngOnInit(): void {
  //     this.api.getProduct()
  //     .subscribe(res=>{
  //       this.productList = res;
  //     })

  // }
}
