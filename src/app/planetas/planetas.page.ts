import { Component, OnInit } from '@angular/core';
import { Planeta, RespuestaPlanetas } from '../interfaces/interfaces';
import { PlanetasService } from '../services/planetas';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { PlanetaModalComponent } from '../components/planeta-modal/planeta-modal.component'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
})
export class PlanetasPage implements OnInit {
  planetas: Planeta[] = [];

  constructor(
    private planetasService: PlanetasService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.planetasService.getPlanetas().subscribe((resp: RespuestaPlanetas) => {
      this.planetas = resp.results;
    });
  }

  async abrirModal(planeta: Planeta) {
    const modal = await this.modalCtrl.create({
      component: PlanetaModalComponent,
      componentProps: { planeta }, // Se pasa el planeta seleccionado
    });
    await modal.present();
  }
}
