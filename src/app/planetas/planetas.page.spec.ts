import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetasV2Page } from './planetas-v2.page';

describe('PlanetasPage', () => {
  let component: PlanetasV2Page;
  let fixture: ComponentFixture<PlanetasV2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasV2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
