export interface RootObjectPokeList {
 count:    number;
 next:     null;
 previous: string;
 results:  Result[];
}

export interface Result {
 name: string;
 url:  string;
}
