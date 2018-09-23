import { Injectable } from '@angular/core';

import Player from '@models/player.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class PlayerService {

    private sessionPlayer$ = new BehaviorSubject<Player>(undefined);
    public onSessionPlayerChange = this.sessionPlayer$.asObservable();

    constructor() { }

    setSessionPlayer(player: Player) {
        this.sessionPlayer$.next(player);
    }

    getSessionPlayer(): Player {
        return this.sessionPlayer$.getValue();
    }

}
