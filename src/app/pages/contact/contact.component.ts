import { Component, OnInit } from '@angular/core';
import { ContactModel } from './contact-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactModel = new ContactModel();

  readonly RECAPTCHA_SITE_KEY = "6LcrhOYUAAAAAPkMYoCKjkZm0lxuJJx4E19eJfIe";

  constructor() {
    this.contactModel.name = "";
    this.contactModel.email = "";
    this.contactModel.subject = "";
    this.contactModel.message = "";
  }

  ngOnInit(): void {
  }

}
