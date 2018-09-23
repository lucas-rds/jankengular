import Player from '@models/player.model';

export default class Match {
    public id: number;
    public room: string;
    public players: Player[];
    public result: object;
}
