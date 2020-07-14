import { Component, OnInit, Input } from '@angular/core';

import { Event } from './event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() event: Event;
  date: string;
  time: string;

  constructor() { }

  ngOnInit(): void {
    this.date = this.event.datetime.toDateString().split(' ').slice(1, 3).join(' ');
    this.time = this.event.datetime.toTimeString().split(':').slice(0, 2).join(':');
  }

}
