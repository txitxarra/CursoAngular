import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(value: string, arg:boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');
    if(arg){
    nombres = nombres.map( nombre => {
      return nombre[0].toLocaleUpperCase() + nombre.substring(1);
    })
  }else{
      
    nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substring(1);
  }
    return nombres.join(' ');
  }

}
