import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio-UI';

  // Form declaration
  contactForm !: FormGroup;

  constructor(private fbService : FormBuilder) { };

  ngOnInit() { 

  }

  // Submit form function
  sendMessage() {
    console.log(this.contactForm.value)
  }



}
