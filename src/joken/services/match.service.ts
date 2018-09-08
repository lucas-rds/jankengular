import { Injectable } from '@angular/core';

import DomService from './dom.service';
import { MatchComponent } from '@components/match/match.component';
import Room from '../models/room.model';

@Injectable({
    providedIn: 'root'
})
export default class MatchService {

    constructor(private domService: DomService) { }

    startMatch(room: Room) {
        this.domService.addComponent(MatchComponent, 'match-modal');
    }

}
