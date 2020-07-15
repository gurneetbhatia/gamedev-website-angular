import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReCaptchaV3Service } from 'ng-recaptcha';

import { ContactModel } from './contact-model';
import { NotificationService } from 'src/app/shared/notification.service';
import { EmailService } from './email.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactModel = new ContactModel();

  private singleExecutionSubscription: Subscription;
  private allExecutionsSubscription: Subscription;

  constructor(
    private recaptchaService: ReCaptchaV3Service,
    private notificationService: NotificationService,
    private emailService: EmailService
  ) {
    this.contactModel.name = "";
    this.contactModel.email = "";
    this.contactModel.subject = "";
    this.contactModel.message = "";
  }

  public ngOnInit() {
    this.allExecutionsSubscription = this.recaptchaService.onExecute
      .subscribe((data) => {
        this.emailService.sendEmail(this.contactModel, data.token).subscribe(
          (data) => {
            this.notificationService.showSuccess("Email sent successfully");
          },
          (error) => {
            console.log(error);
            this.notificationService.showError("There was an error sending the email, please try again later.");
          }
        )
      },
      (error) => {
        this.notificationService.showError("An error occured, please try again later");
      }
      );
  }

  onSubmit(form: NgForm) {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    this.singleExecutionSubscription = this.recaptchaService.execute("").subscribe(
      (token) => {
        // handle the token and form here (post using the email service)
        console.log("success");
      },
      (error) => {
        this.notificationService.showError("An error occured, please try again later");
      }
    )
  }

}
