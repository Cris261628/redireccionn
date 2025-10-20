import { Component, OnInit } from '@angular/core';

interface Elemento {
  nombre: string;
  ruta: string;
  icono: string;
}

@Component({
  standalone: false,
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

   elementos: Elemento[] = [
    { nombre: 'Página Dos', ruta: '/dos', icono: 'globe-outline' },
    { nombre: 'Página Tres', ruta: '/tres', icono: 'globe-outline' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
