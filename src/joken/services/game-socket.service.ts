import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SocketService from '@services/socket.service';
import Room from '@models/room.model';
import { Events } from '@constants/events.constants';
import Match from '@models/match.model';
import Player from '@models/player.model';

@Injectable({
    providedIn: 'root'
})
export default class GameSocketService {

    constructor(private socketService: SocketService) { }

    connect() {
        this.socketService.connect();
    }

    disconnect() {
        this.socketService.disconnect();
    }

    onRoomsUpdate(): Observable<any> {
        return this.socketService.onEvent(Events.ROOM_UPDATE);
    }

    emitEnteredRoom(room: Room, player: Player) {
        this.socketService.emit(Events.PLAYER_ENTER_ROOM, { room, player });
    }

    startMatch(room: Room) {
        this.socketService.emit(Events.START_MATCH, room);
    }

    onMatchStarted(room: Room): Observable<any> {
        return this.socketService.onEvent(`${Events.MATCH_STARTED}-${room.id}`);
    }

    emitPlayerChoose(player: Player, match: Match, choice: number) {
        this.socketService.emit(Events.PLAYER_CHOOSE_VALUE, { player, match, choice });
    }

    onPlayerChoosed(room: Room): Observable<any> {
        return this.socketService.onEvent(`${Events.PLAYER_CHOOSE_VALUE}-${room.id}`);
    }
}
