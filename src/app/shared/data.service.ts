import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Event } from '../pages/events/event';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private events: Event[] = [
    {
      title: "Event1",
      datetime: new Date(),
      location: "Kilburn",
      url: "https://facebook.com"
    },
    {
      title: "Event2",
      datetime: new Date(2020, 0, 23, 12, 0),
      location: "Kilburn",
      url: "https://facebook.com"
    },
    {
      title: "Event3",
      datetime: new Date(2020, 3, 23, 12, 0),
      location: "Kilburn",
      url: "https://facebook.com"
    },
  ];

  constructor() { }

  getAllEvents(): Observable<Event[]> {
    return of(this.events);
  }
}
