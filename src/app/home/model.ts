export interface ICharacters
{   
    id: number;
    url: string;
    name: string;
    image: string;
    
}

export interface RootObject {
    info:    Info;
    results: ICharacterInfo[];
   }
   
   export interface Info {
    count: number;
    next:  string;
    pages: number;
    prev:  null;
   }
   
   export interface ICharacterInfo {
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
   