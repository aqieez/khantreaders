import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent {

  isButtonDisabled: boolean = false;

  loginForm = new FormGroup({
    'name': new FormControl<string>('', Validators.required),
    'email': new FormControl<string>('', [Validators.required, Validators.email]),
    'phone': new FormControl<string>('',Validators.required),
    'message': new FormControl<string>('', Validators.required)

  })

  constructor(private router: Router) {
  }


  async send() {
    if (!this.loginForm.valid || this.isButtonDisabled) {
      return; // Do nothing if the form is not valid or the button is disabled
    }

    this.isButtonDisabled = true; // Disable the button when clicked

    emailjs.init('2ILrSpxqX9igCxNXG');

    try {
      await emailjs.send("service_ffarscz", "template_a6xg7b7", {
        client_name: this.loginForm.controls.name.value,
        client_email: this.loginForm.controls.email.value,
        client_phone: this.loginForm.controls.phone.value,
        message: this.loginForm.controls.message.value,
      });

      alert("Message sent");
      this.loginForm.reset();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      this.isButtonDisabled = false; // Enable the button after the operation is complete
    }
  }

  cancel() {
    this.router.navigate(['']).then()

  }

}
