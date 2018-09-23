import Player from './player.model';

export default class Room {
    private _id: number;
    private _name: string;
    private _players: Player[];

    constructor(name: string, players: Player[]) {
        this._name = name;
        this._players = players;
    }

    set id(value: number) {
        this._id = value;
    }

    get id(): number {
        return this._id;
    }

    set name(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set players(players: Player[]) {
        this._players = players;
    }

    get players(): Player[] {
        return this._players;
    }
}
