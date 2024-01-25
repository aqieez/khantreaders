import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuoteComponent} from "./quote/quote.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [{
  path: '', component: HomeComponent
},
  {
    path:'quote', component: QuoteComponent
  },
  {
    path: 'about', component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
