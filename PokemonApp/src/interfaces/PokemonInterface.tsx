// Generated by https://quicktype.io

export interface PokemonPagine {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}

export interface SimplePokemon {
    id:    string;    
    name:  string;
    picture:   string;
    color?:string;
}