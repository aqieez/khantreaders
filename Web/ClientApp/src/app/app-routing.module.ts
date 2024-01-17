import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuoteComponent} from "./quote/quote.component";

const routes: Routes = [{
  path: '', component: HomeComponent
},
  {
    path:'quote', component: QuoteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
