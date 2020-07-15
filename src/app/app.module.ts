import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { EventCardComponent } from './pages/events/event-card.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EventsComponent,
    EventCardComponent,
    TutorialsComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RecaptchaV3Module,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LeFqrEZAAAAAFaeC-LRXpAA_HnyxaYBjywNIvRQ' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
