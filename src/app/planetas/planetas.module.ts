import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './planetas-routing.module';

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PlanetasPageModule {}
