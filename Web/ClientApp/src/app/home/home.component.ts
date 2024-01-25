import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private route: Router) { }

  goToAbout(){
    this.route.navigate(['about']).then();
  }

}
