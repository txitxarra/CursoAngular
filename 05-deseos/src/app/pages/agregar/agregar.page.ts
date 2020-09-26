import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from '../../models/lista-item.model';
import { element } from 'protractor';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor(private deseosService: DeseosService, private route: ActivatedRoute) {
      this.lista = deseosService.obtenerLista(route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
  }

  agregarItem(){
    if ( this.nombreItem.length > 0){
      const listaItem: ListaItem = new ListaItem(this.nombreItem);
      this.lista.items.push(listaItem);
      this.nombreItem = '';
      this.deseosService.guardarLocal();
    }
  }

  cambioCheck(item: ListaItem){
    const pendientes: ListaItem[] = this.lista.items.filter( elementItem => {
      return !elementItem.completado;
    });

    if (pendientes.length === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }else{
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.deseosService.guardarLocal();

  }

  borrar(item: number){
    this.lista.items.splice(item, 1);

    this.deseosService.guardarLocal();
  }
}
