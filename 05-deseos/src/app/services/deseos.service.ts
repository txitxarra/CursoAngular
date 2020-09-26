import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[] = [];

  constructor() {
      this.recuperarLocal();
  }

  crearLista(lista: string){
    const lista1: Lista  = new Lista(lista);
    this.lista.push(lista1);
    this.guardarLocal();
    return lista1.id;
  }

  obtenerLista(id: number | string){

    id = Number(id);

    return this.lista.find( element => {
      return element.id === id;
    });
    // this.lista.forEach(element => {
    //   if (element.id === id){
    //     return element;
    //   }
    // });
  }

  guardarLocal(){
    localStorage.setItem('data', JSON.stringify(this.lista));
  }

  recuperarLocal(){
    if (localStorage.getItem('data')){
      this.lista = JSON.parse(localStorage.getItem('data'));
    }
  }
}
