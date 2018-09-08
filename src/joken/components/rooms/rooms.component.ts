import { Component, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Room from '@models/room.model';
import Player from '@models/player.model';
import MatchService from '@services/match.service';

@Component({
  selector: 'joken-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnDestroy {

  private rooms$ = new BehaviorSubject<Room[]>([]);

  constructor(private matchService: MatchService) { }

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
    //TODO: Get user from session or something
    const loggedUser = new Player('Lucas');
    room.players.push(loggedUser);
    this.matchService.startMatch(room);
  }

}
