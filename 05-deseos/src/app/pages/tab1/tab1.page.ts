import { Component } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  deseosService: DeseosService;

  constructor(deseosService: DeseosService) {
    this.deseosService = deseosService;
  }

}
