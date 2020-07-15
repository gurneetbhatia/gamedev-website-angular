import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NotificationService } from 'src/app/shared/notification.service';
import { ContactModel } from './contact-model';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
      private http: HttpClient,
      private notificationService: NotificationService
    ) { }

  sendEmail(contactForm: ContactModel, recaptcha: any) {
    return this.http.post('https://unicsmcr.com/.netlify/functions/email',
                          JSON.stringify({
                            name: contactForm.name,
                            email: contactForm.email,
                            message: contactForm.message,
                            'g-recaptcha-response': recaptcha,
                            to: 'unics:game-dev'
                          }), httpOptions);

  }

}
