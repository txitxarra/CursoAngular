import { Injectable } from '@angular/core';
import { element } from 'protractor';
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

    return this.lista.find( data => {
      return data.id === id;
    });
  }


  borrarLista(lista: Lista) {
    this.lista = this.lista.filter( data => {
      return data.id  !== lista.id;
    });
    this.guardarLocal();
  }

  guardarLocal(){
    localStorage.setItem('data', JSON.stringify(this.lista));
  }

  editar(titulo: string, lista: Lista) {
    const listaBuscada: Lista = this.obtenerLista(lista.id);
    listaBuscada.titulo = titulo;
    this.guardarLocal();

  }

  recuperarLocal(){
    if (localStorage.getItem('data')){
      this.lista = JSON.parse(localStorage.getItem('data'));
    }
  }
}
