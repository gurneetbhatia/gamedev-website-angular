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

  constructor(private dataService: DataService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.dataService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        this.notificationService.showError("There was an error fetching the events, please try again later.")
      }
    )
  }

}
