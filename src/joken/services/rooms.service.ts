
import { Observable, of } from 'rxjs';

import roomsMock from '../mocks/rooms.mock';
import Room from '../models/room.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerConstants } from '@constants/server.constants';

@Injectable({
    providedIn: 'root'
})
export default class RoomService {
    constructor(private http: HttpClient) { }

    fetchRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(ServerConstants.SERVER_ADDRESS + '/rooms');
    }
}
