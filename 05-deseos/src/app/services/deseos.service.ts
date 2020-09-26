import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[] = [];

  constructor() {
      const lista1 = new Lista('Recolectar piedras');
      const lista2 = new Lista('Dominar a la humanidad');

      this.lista.push(lista1, lista2);


  }
}
