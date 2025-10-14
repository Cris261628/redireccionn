import { Component } from '@angular/core';
interface Elemento {
  icono: string;
  nombre: string;
  ruta: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
   elementos: Elemento[]=[
    {
      icono: 'newspaper-outline',
      nombre: 'principal',
      ruta:'/principal'
    },
    {
      icono: 'people-circle-outline',
      nombre: 'dos',
      ruta: '/dos'
    },
    {
      icono: 'logo-web-component',
      nombre: 'tres',
      ruta: '/tres'
    }
  ]
  constructor() {}
}
