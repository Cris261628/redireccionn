import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Planeta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-planeta-modal',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './planeta-modal.component.html',
  styleUrls: ['./planeta-modal.component.scss'],
})
export class PlanetaModalComponent {
  @Input() planeta!: Planeta;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
