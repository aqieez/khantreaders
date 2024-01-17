import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent  {

  IsMenuOpen: boolean= false

  constructor(  ) {
  }

  toggleMenu(){
    this.IsMenuOpen = ! this.IsMenuOpen
    console.log(this.IsMenuOpen)
  }

  login(){

  }


}
