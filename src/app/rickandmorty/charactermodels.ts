export interface RootCharacterObject {
 info:    Info;
 results: Character[];
}

export interface Info {
 count: number;
 next:  string | null;
 pages: number;
 prev:  string | null;
}

export interface Character {
 created:  Date;
 episode:  string[];
 gender:   Gender;
 id:       number;
 image:    string;
 location: Location;
 name:     string;
 origin:   Location;
 species:  Species;
 status:   Status;
 type:     string;
 url:      string;
}

export enum Gender {
 Female = "Female",
 Male = "Male",
 Unknown = "unknown",
}

export interface Location {
 name: string;
 url:  string;
}

export enum Species {
 Alien = "Alien",
 Human = "Human",
}

export enum Status {
 Alive = "Alive",
 Dead = "Dead",
 Unknown = "unknown",
}
