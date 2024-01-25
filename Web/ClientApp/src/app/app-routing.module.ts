import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuoteComponent} from "./quote/quote.component";
import {ProductComponent} from "./products/product/product.component";

const routes: Routes = [{
  path: '', component: HomeComponent
},
  {
    path:'quote', component: QuoteComponent
  },
  {
    path:'product', component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
