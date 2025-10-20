import { Component, OnInit } from '@angular/core';
import { Planeta, RespuestaPlanetas } from '../interfaces/interfaces';
import { PlanetasService } from '../services/planetas';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-planetas',
  standalone: true,
  imports: [CommonModule,
    IonicModule
  ],
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
})
export class PlanetasPage implements OnInit {
  planetas: Planeta[] = [];

  constructor(private planetasService: PlanetasService) {}

  ngOnInit() {
    this.planetasService.getPlanetas().subscribe(resp => {
      console.log('Planetas', resp);
      this.planetas = resp.results;
    });
  }
}
