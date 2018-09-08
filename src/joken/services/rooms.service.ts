
import { Observable, of } from 'rxjs';

import roomsMock from '../mocks/rooms.mock';
import Room from '../models/room.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export default class RoomService {
    constructor() { }

    fetchRooms(): Observable<Room[]> {
        return of(roomsMock);
    }
}
