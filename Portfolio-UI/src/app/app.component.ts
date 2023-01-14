import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio-UI';

  // Form declaration
  contactForm !: FormGroup;

    // Email validation expression
  emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  // Phone number validation expression
  phoneRegExp = /^(?:254|\+254|0)?(7(?:(?:[129][0–9])|(?:0[0–8])|(4[0–1]))[0–9]{6})$/

  constructor(private fbService : FormBuilder) { };

  ngOnInit() { 

    this.contactForm = this.fbService.group({
      names: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required, Validators.pattern(this.emailRegExp)],
      phonenumber: ['', Validators.pattern(this.phoneRegExp)],
      message:['', Validators.required]
    })

  }

  // Submit form function
  sendMessage() {
    console.log(this.contactForm.value)
  }



}
