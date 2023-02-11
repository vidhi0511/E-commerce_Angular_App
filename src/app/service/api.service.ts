import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  getProduct():any{
    let url="https://5d76bf96515d1a0014085cf9.mockapi.io/product"
    console.log(url)
    return this.http.get(url);
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
}