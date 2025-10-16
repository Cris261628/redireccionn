import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonicModule]  // <--- Importa aquí el módulo de Ionic
})
export class PrincipalPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
