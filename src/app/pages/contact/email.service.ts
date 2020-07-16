import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContactModel } from './contact-model';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
      private http: HttpClient
    ) { }

  sendEmail(contactForm: ContactModel) {
    return this.http.post('http://gamedev.pythonanywhere.com/email',
                          JSON.stringify({
                            name: contactForm.name,
                            email: contactForm.email,
                            message: contactForm.message,
                            subject: contactForm.subject
                          }), httpOptions);

  }

}
/*
fetch('https://unicsmcr.com/.netlify/functions/email', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'Gurneet Bhatia',
				email: 'sbgurneet@gmail.com',
				message: 'please work (bruteforce)',
				'g-recaptcha-response': '03AGdBq27eP5H1vGTAdq1xUI7zwqienzycitffP-26KYIpnKHo1WqE5k-YYC5aRla9fuUVeEn6NJqHgvC1hXZVu6V0ig6TKe3p9Pmytsu-hgnUDB0REbCCmQJcD8CEfLHMELK9e702JqbHyrYK9txtSaveI7kgmmYO5zTbmQYJBHgF6xo7DK-r11FJDnbfshhlaYExQnMuomVB2pHaR6d428BoKW8wj2dpNXUdNOEF84WdHEnfCV2zpKj9FuQTI7dWzsgJgGV2v_HfYjugoVjVyu7Aez6bLS9nOauqhb35rvr53MfMecnHh5nowx_uMBKOjsH4zuwCkXKfw6v9LBf3BtUWuGnZgF_-ClQE8jC816VIojONvGd-fQP3pcbO5V3V9G5D0mjKQqr6DYhnSGPgcrqu_wSwEljzx79As8CGlXHgdR6vXbkRR_Z3hgNnNlvPBHa2A4h5mVbc',
				to: 'unics:core'
			})
	}).then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error)
  })
*/