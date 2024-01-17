import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent {

  loginForm = new FormGroup({
    'name': new FormControl<string>('', Validators.required),
    'email': new FormControl<string>('', [Validators.required, Validators.email]),
    'message': new FormControl<string>('', Validators.required)

  })

  constructor(private router: Router) {
  }

  send() {

  }

  cancel() {
    this.router.navigate(['']).then()

  }

}
