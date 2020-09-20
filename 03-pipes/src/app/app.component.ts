import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán America';
  nombre2: string = 'miGuel anGeL martinez LORCA';
  arreglo: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma:string = 'es';
  video:string = 'https://www.youtube.com/embed/T_wmt_iRjRY';
  activar:boolean = true;

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('Llegaron los datos');
    }, 4500);
  }
  );
  heroe = 
  {
    nombre: 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion : {
        calle : 'Primera',
        casa: 20
    }
  };
}
