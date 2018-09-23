
export default class Player {
    id: string;
    name: string;
    choice: number = undefined;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
