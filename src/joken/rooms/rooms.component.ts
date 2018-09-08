import { Component,Input, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Room from '../models/room.model';
import Player from '../models/player.model';

@Component({
  selector: 'joken-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnDestroy {

  private rooms$ = new BehaviorSubject<Room[]>([]);

  constructor() { }

  @Input()
  set rooms(rooms) {
    this.rooms$.next(rooms);
  }

  get rooms() {
    return this.rooms$.getValue();
  }

  ngOnDestroy() {
    this.rooms$.unsubscribe();
  }

  enterRoom(e: Event, room: Room) {
    room.players.push(new Player('Lucas'));
    console.log(room);
  }

}
