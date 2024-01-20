import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent  {

  IsMenuOpen: boolean= false

  constructor( private el: ElementRef, private renderer: Renderer2 ) {
  }

  toggleMenu(){
    this.IsMenuOpen = ! this.IsMenuOpen
    console.log(this.IsMenuOpen)
  }

  scrollToProducts() {
    const productsElement = this.el.nativeElement.ownerDocument.getElementById('products');

    if (productsElement) {
      const offset = this.IsMenuOpen ? 0 : 90; // Adjust this value based on your needs

      // Calculate the target position including the offset
      const targetPosition = productsElement.getBoundingClientRect().top + window.scrollY - offset;

      // Scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      this.IsMenuOpen = false;
    }
  }



}
