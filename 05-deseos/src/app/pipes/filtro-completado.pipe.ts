import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(value: Lista[], terminada: boolean = true): Lista[] {
    return value.filter(elementLista => {
        return elementLista.terminada === terminada;
    } );
  }

}
