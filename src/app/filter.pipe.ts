import { Pipe, PipeTransform } from '@angular/core';

//ng g pipe filter

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term?: any): any {
    //check if search term is undefined
    if (term === undefined) return ninjas;
    return ninjas.filter( function(ninja: any){
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
