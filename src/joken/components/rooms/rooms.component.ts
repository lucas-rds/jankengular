import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import Room from '@models/room.model';
import GameSocketService from '@services/game-socket.service';
import PlayerService from '@services/player.service';
import MatchDomService from '@services/match-dom.service';

@Component({
  selector: 'joken-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, OnDestroy {

  private rooms$ = new BehaviorSubject<Room[]>([]);
  private matchRoom: Room = new Room('', []);
  private gameSocketSubscription: Subscription;

  constructor(private matchService: MatchDomService,
    private gameSocketService: GameSocketService,
    private playerService: PlayerService) {

  }

  @Input()
  set rooms(rooms) {
    this.rooms$.next(rooms);
  }

  get rooms() {
    return this.rooms$.getValue();
  }

  ngOnInit() {
    this.gameSocketService.connect();
    this.gameSocketService.onRoomsUpdate().subscribe(this.updateRooms);
  }

  ngOnDestroy() {
    this.rooms$.unsubscribe();
    this.gameSocketSubscription.unsubscribe();
    this.gameSocketService.disconnect();
  }

  updateRooms = (rooms: Room[]) => {
    this.rooms = rooms;
    if (this.matchRoom) {
      this.matchRoom = rooms.find(room => room.id === this.matchRoom.id);
      this.matchService.updateMatchRoom(this.matchRoom);
    }
  }

  enterRoom(e: Event, room: Room) {
    const player = this.playerService.getSessionPlayer();
    this.matchRoom = room;
    this.gameSocketService.emitEnteredRoom(room, player);
    this.matchService.startMatchRoom(room);
  }

}
