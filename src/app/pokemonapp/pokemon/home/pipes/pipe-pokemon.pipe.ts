import { Pipe, PipeTransform } from '@angular/core';
import { RootObject } from '../model';

@Pipe({
  name: 'pipePokemon'
})
export class PipePokemonPipe implements PipeTransform {
  
  transform(value: Array<RootObject>,  args: any): any {
    const result = [];
    for(const pok of value){
      if(pok.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase())>-1){
        result.push(pok)
      }
    }
    if(result.length==0){
      return value
    }

    return result
  }

}
