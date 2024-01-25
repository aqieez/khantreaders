import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private route: Router) { }

  goToProduct(){
    this.route.navigate(['product']).then()
  }

  ngOnInit(): void {
  }

}
