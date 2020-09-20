import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenya'
})
export class ContrasenyaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): unknown {

    // if (activar){
    //   let result: string = '';
    //   for (let index = 0; index < value.length; index++) {
    //     result = result + '*';
    //   }
    //   return result;
    // }
    return activar ? '*'.repeat(value.length) : value;
  }

}
