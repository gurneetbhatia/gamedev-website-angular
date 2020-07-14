import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/data.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { Event } from './event';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  upcomingEvents: Event[];
  pastEvents: Event[];

  constructor(private dataService: DataService,
              private notificationService: NotificationService) {
                this.upcomingEvents = [];
                this.pastEvents = [];
              }

  ngOnInit(): void {
    this.dataService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
        this.sortEvents();
      },
      (error) => {
        this.notificationService.showError("There was an error fetching the events, please try again later.")
      }
    )
  }

  sortEvents() {
    const today = new Date();
    this.events.forEach((event) => {
      if (event.datetime >= today) {
        this.upcomingEvents.push(event)
      } else {
        this.pastEvents.push(event);
      }
    })
  }

}
