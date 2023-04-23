import { Pipe, PipeTransform } from '@angular/core';
import { RootObject } from '../model';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: Array<RootObject>, page_size: number, page_number: number): any[] {
    
    if(!array.length){
      return array
    } 
    

    page_size = page_size || 5;
    page_number = page_number || 1;
    --page_number

    return array.slice(page_number * page_size, (page_number + 1) * page_size)
  }

}
