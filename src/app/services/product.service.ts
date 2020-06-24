import {Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient){
  }
  get(){
    var url = "http://fipo.equisd.com/api/products.json";
    return this.http.get(url, {})  }
}