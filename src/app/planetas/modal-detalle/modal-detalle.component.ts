import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Planeta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modal-detalle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss'],
})
export class ModalDetalleComponent {
  @Input() planeta!: Planeta;

  constructor(private modalCtrl: ModalController) {}

  cerrar(): void {
    this.modalCtrl.dismiss();
  }

  getDescripcionEstiloJuego(): string {
    const tipoMapa = this.planeta.diametro > 10000 ? 'amplio y de exploración' : 'cerrado y táctico';
    const dificultad = this.planeta.habitabilidad ? 'media' : 'alta';
    const ambiente = /volcánico|glacial|desértico|hostil|caliente|tóxico/i.test(this.planeta.descripcion) ? 'hostil' : 'moderado';

    return `
      🌌 Bienvenido a ${this.planeta.nombre}

      ${this.planeta.descripcion}

      Diámetro: ${this.planeta.diametro} km | Gravedad: ${this.planeta.gravedad}
      Habitabilidad: ${this.planeta.habitabilidad ? 'Posible' : 'Inviable'}

      Este escenario es ${tipoMapa}, con condiciones ${ambiente} y dificultad ${dificultad}.
      Ideal para misiones de exploración, infiltración o control estratégico.
    `;
  }
}


/*import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-detalle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss'],
})



export class ModalDetalleComponent {
  @Input() planeta: any;

constructor(private modalCtrl: ModalController) {}

cerrar() {
  this.modalCtrl.dismiss();
}

  planetImages: { [key: string]: string } = {
    Tatooine: 'https://starwars-visualguide.com/assets/img/planets/1.jpg',
    Alderaan: 'https://starwars-visualguide.com/assets/img/planets/2.jpg',
    YavinIV: 'https://starwars-visualguide.com/assets/img/planets/3.jpg', 
    Hoth: 'https://starwars-visualguide.com/assets/img/planets/4.jpg',
    Dagobah: 'https://starwars-visualguide.com/assets/img/planets/5.jpg',
  };

   getImagenLocal(planeta: any): string {
    const nombre = planeta.name.toLowerCase().replace(/\s/g, '-');
    return `assets/img/planetas/${nombre}.jpg`;
  }

  getDescripcionEstiloJuego(planeta: any): string {
    const tipoMapa = +planeta.diameter > 10000 ? 'amplio y de exploración' : 'cerrado y táctico';
    const dificultad = planeta.population === 'unknown' || +planeta.population > 1000000000 ? 'alta' : 'media';
    const ambiente = planeta.climate.includes('arid') || planeta.climate.includes('frozen') ? 'hostil' : 'moderado';

    return `
      🌌 Bienvenido a ${planeta.name}

      Clima: ${planeta.climate} | Terreno: ${planeta.terrain}
      Población: ${planeta.population} | Diámetro: ${planeta.diameter} km

      Este escenario es ${tipoMapa}, con condiciones ${ambiente} y dificultad ${dificultad}.
      Ideal para misiones de exploración, infiltración o control estratégico.
    `;
  }

}*/