import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ContactModel } from './contact-model';
import { NotificationService } from 'src/app/shared/notification.service';
import { EmailService } from './email.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  contactModel = new ContactModel();

  private singleExecutionSubscription: Subscription;
  private allExecutionsSubscription: Subscription;

  constructor(
    private notificationService: NotificationService,
    private emailService: EmailService
  ) {
    this.contactModel.name = "";
    this.contactModel.email = "";
    this.contactModel.subject = "";
    this.contactModel.message = "";
  }

  ngOnDestroy(): void {
    if (this.allExecutionsSubscription) {
      this.allExecutionsSubscription.unsubscribe();
    }
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
  }

  public ngOnInit() {
    /*this.allExecutionsSubscription = this.recaptchaService.onExecute
      .subscribe((data) => {
        console.log(data)
        this.emailService.sendEmail(this.contactModel, data.token).subscribe(
          (resp) => {
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
      );*/
  }

  onSubmit(form: NgForm) {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    this.singleExecutionSubscription = this.emailService.sendEmail(this.contactModel).subscribe(
      (response) => {
        // handle the token and form here (post using the email service)
        console.log("success");
        console.log(response);
        this.notificationService.showSuccess("Email sent successfully. We will get back to you soon.")
      },
      (error) => {
        console.log(error)
        this.notificationService.showError("An error occured, please try again later");
      }
    )
  }

}
