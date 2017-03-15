import { Component, OnInit } from '@angular/core';
import { IEvent } from './ievent';
import { EventService } from '../event.service';


@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  pageTitle = 'Events List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  searchCriteria: string;
  showImage: boolean = false;
  events: IEvent[];

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this.events = this._eventService.getEvents();
  }

  toggleImage(): void {
        this.showImage = !this.showImage;
    }

}
