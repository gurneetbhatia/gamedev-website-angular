import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/data.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllEvents().subscribe(
      (data) => {
      },
      (error) => {
      }
    )
  }

}
