import { Injectable } from '@angular/core';

import * as SocketIO from 'socket.io-client';
import { Observable } from 'rxjs';
import { ServerConstants } from '@constants/server.constants';

@Injectable({
    providedIn: 'root'
})
export default class SocketService {

    private socket: SocketIOClient.Socket;

    constructor() { }

    connect(): SocketIOClient.Socket {
        this.socket = SocketIO(ServerConstants.SERVER_ADDRESS);
        return this.socket;
    }

    onMessage(): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on('message', data => observer.next(data));
        });
    }

    onEvent(event: string): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on(event, data => observer.next(data));
        });
    }

    emit(event: string, message: object) {
        this.socket.emit(event, message);
    }
}
