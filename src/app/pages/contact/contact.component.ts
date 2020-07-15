import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

import { ContactModel } from './contact-model';
import { NotificationService } from 'src/app/shared/notification.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactModel = new ContactModel();

  private singleExecutionSubscription: Subscription;

  constructor(
    private recaptchaService: ReCaptchaV3Service,
    private notificationService: NotificationService
  ) {
    this.contactModel.name = "";
    this.contactModel.email = "";
    this.contactModel.subject = "";
    this.contactModel.message = "";
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    console.log("executing the subscription")
    this.singleExecutionSubscription = this.recaptchaService.execute("").subscribe(
      (token) => {
        console.log("here")
        console.log(token)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
