import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/data.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private dataService: DataService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.dataService.getAllEvents().subscribe(
      (data) => {
        this.notificationService.showSuccess("data fetched successfully!")
      },
      (error) => {
      }
    )
  }

}
