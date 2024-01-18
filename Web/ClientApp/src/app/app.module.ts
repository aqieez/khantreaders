import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuoteComponent,
    TestimonialComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
