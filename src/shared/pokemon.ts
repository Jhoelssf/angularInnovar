import { Type } from './type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.number}.png`;
  //return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getPokemonNumber(pokemon)}.png`;
}

export function getPokemonNumber(pokemon: Pokemon): number{ //string {
  //return leadingZero(pokemon.number);
  return pokemon.number;
}

function leadingZero(str: string | number, size = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}