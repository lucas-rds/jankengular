import { Component } from '@angular/core';
import Room from '@models/room.model';
import RoomService from '@services/rooms.service';
import GuidGenerator from '@services/guid.generator';
import PlayerService from '@services/player.service';
import Player from '@models/player.model';

@Component({
  selector: 'joken-po',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  rooms: Room[];

  constructor(private roomService: RoomService,
    private playerService: PlayerService,
    private guidGenerator: GuidGenerator) {

    this.roomService.fetchRooms().subscribe(this.fillRooms);

    const guid = this.guidGenerator.guid();
    const newPlayer = new Player(guid, `Player ${guid}`);
    this.playerService.setSessionPlayer(newPlayer);
  }

  fillRooms = (rooms) => {
    this.rooms = rooms;
  }

}
