import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './Services/message.service';

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

  constructor(private fbService : FormBuilder, private messageService : MessageService) { };

  ngOnInit() { 

    this.contactForm = this.fbService.group({
      names: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegExp)]],
      phonenumber: [''],
      message: ['', [Validators.required]],
      status: ['unread']
    })

  }

  // GETTER FUNCTIONS

  get names() {
    return this.contactForm.get('names');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phonenumber() {
    return this.contactForm.get('phonenumber');
  }

  get message() {
    return this.contactForm.get('message');
  }

  // Submit form function
  sendMessage() {
    console.log(this.contactForm.value)

    this.messageService.sentMessage(this.contactForm.value)
      .subscribe(success => {
          console.log("Message sent successfully")
      },
        error => {
          console.log("Error sending message", error)
        }
      )

    this.contactForm.reset();
  }

}
