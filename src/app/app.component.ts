import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  elementos = [
    { nombre: 'Principal', ruta: '/principal', icono: 'home-outline' },
    { nombre: 'Página Dos', ruta: '/dos', icono: 'globe-outline' },
    { nombre: 'Página Tres', ruta: '/tres', icono: 'globe-outline' },
    { nombre: 'Planetas', ruta: '/planetas', icono: 'planet-outline' },
  ];
  constructor() {}
}
