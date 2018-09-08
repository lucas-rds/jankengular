import { Component, OnInit, Input } from '@angular/core';
import Room from '@models/room.model';
import RoomService from '@services/rooms.service';

@Component({
  selector: 'joken-po',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  rooms: Room[];

  constructor(private roomService: RoomService) {
    this.roomService
      .fetchRooms()
      .subscribe(this.fillRooms);
  }

  fillRooms = (rooms) => {
    this.rooms = rooms;
  }

}
