export interface RootObject {
    characters: Character[];
}
   
export interface Character {
abilities:      string[];
attack:         string;
bio:            string;
defense:        string;
gender:         Gender;
health:         string;
id:             string;
img:            string;
kiRestoreSpeed: string;
name:           string;
race:           string;
}

export enum Gender {
Female = "Female",
Male = "Male",
}
   