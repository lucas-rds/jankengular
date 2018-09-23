import { Injectable } from '@angular/core';

import DomService from '@services/dom.service';
import { MatchComponent } from '@components/match/match.component';
import Room from '@models/room.model';

@Injectable({
    providedIn: 'root'
})
export default class MatchDomService {

    private readonly COMPONENT_IDENTIFIER: string = 'match-modal';

    constructor(private domService: DomService) { }

    startMatchRoom(room: Room) {
        this.domService.addComponent(MatchComponent, this.COMPONENT_IDENTIFIER, 'main', { room });
    }

    updateMatchRoom(room: Room) {
        this.domService.updateComponentData(this.COMPONENT_IDENTIFIER, { room });
    }

}
