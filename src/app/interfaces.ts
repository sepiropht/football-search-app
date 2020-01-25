export interface league {
    _id: string;
    name: string;
    sport: string;
    teams: Array<string>;
}

export interface team {
    _id: string;
    name: string;
    thumbnail: string;
    players: Array<string>;
}

export interface player {
    _id: string;
    name: string;
    thumbnail: string;
    signing: signing;
    born: Date 
}

interface signing {
    amount: number;
    currency: string
}

