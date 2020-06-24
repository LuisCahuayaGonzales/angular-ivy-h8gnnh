import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  'selector': 'products',
  'template': `
  <ul>
  <li>Xd</li>
  </ul>
  `
})

export class ProductsComponent {
  products:any;
  constructor(private productService: ProductService){
    this.productService.get().subscribe((res) => {
      alert('Bien hecho')
   }, (err) => {
     alert('Mal hecho')
   });
    }
  }