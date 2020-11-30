import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  propiedades:any = {
    danger: false
  };

  alerta:string = 'alert-danger';



  constructor() { }

  ngOnInit(): void {
  }

}
