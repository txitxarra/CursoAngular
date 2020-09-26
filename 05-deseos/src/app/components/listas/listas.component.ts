import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(public deseosService: DeseosService,
              private router: Router) { }

  ngOnInit() {}

  verLista(item: Lista){
    if (this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${item.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${item.id}`);
    }
  }

    borrar(lista: Lista){
      this.deseosService.borrarLista(lista);
    }
}
