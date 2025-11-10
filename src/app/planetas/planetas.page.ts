import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Planeta } from '../interfaces/interfaces';
import { PlanetasService } from '../services/planetas';
import { ModalDetalleComponent } from './modal-detalle/modal-detalle.component';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  providers: [PlanetasService],
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss']
})
export class PlanetasPage implements OnInit {
  planetas: Planeta[] = [];

  constructor(
    private planetasService: PlanetasService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.planetasService.getPlanetas().subscribe({
      next: (data: Planeta[]) => {
        console.log(` [PlanetasPage] ${data.length} planetas cargados correctamente.`);
        console.table(data); 
        this.planetas = data;
      },
      error: (err) => {
        console.error(
          ' [PlanetasPage] Error al cargar planetas desde Firestore:',
          err.message || err
        );
      }
    });
  }

  async mostrarDetalle(planeta: Planeta): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDetalleComponent,
      componentProps: { planeta }
    });

    await modal.present();
  }
}
