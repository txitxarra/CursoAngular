import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;
  @ViewChild(IonList) lista: IonList;

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertController: AlertController) { }

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


    async editarLista(lista: Lista){
      const alert = await this.alertController.create({
        header: 'Cambiar Titulo',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            value: lista.titulo
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
              this.lista.closeSlidingItems();
            }
          }, {
            text: 'Cambiar',
            handler: (data) => {
              if (data.titulo.lenght === 0){
                return;
              }
              this.deseosService.editar(data.titulo, lista);
              this.deseosService.guardarLocal();
              this.lista.closeSlidingItems();

            }
          }
        ]
      });

      await alert.present();
    // this.router.navigateByUrl('/tabs/tab1/agregar');

  }
}
