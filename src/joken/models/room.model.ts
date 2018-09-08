import Player from './player.model';

export default class Room {
    private _name: String;
    private _players: Player[];

    constructor(name: string, players: Player[]) {
        this._name = name;
        this._players = players;
    }
    set players(players: Player[]) {
        this._players = players;
    }
    get players(): Player[] {
        return this._players;
    }
}
