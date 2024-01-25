import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent  {

  IsMenuOpen: boolean= false

  constructor( private el: ElementRef, private renderer: Renderer2, private router: Router) {
  }

  toggleMenu(){
    this.IsMenuOpen = ! this.IsMenuOpen
    console.log(this.IsMenuOpen)
  }

  scrollToProducts() {
    // Check if the current route is not "/"
    if (this.router.url !== '/') {
      // Navigate to "/"
      this.router.navigate(['/']).then(() => {
        // After navigation, perform scrolling
        this.scrollAfterNavigation();
      });
    } else {
      // If already on "/", just perform scrolling
      this.scrollAfterNavigation();
    }
  }

  private scrollAfterNavigation() {
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


  goToAbout() {
    this.router.navigate(['about']).then()
  }

  goToHome() {
    this.router.navigate(['']).then()
  }
}
