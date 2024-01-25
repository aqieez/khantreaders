import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }
  goToProduct(productId: number): void {
    this.router.navigate(['product', productId]).then();
  }

  ngOnInit(): void {
  }

}
