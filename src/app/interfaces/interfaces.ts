export interface Planeta {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  diameter: string;
  gravity: string;
}

export interface RespuestaPlanetas {
  count: number;
  next: string;
  previous: string | null;
  results: Planeta[];
}

// Firebase
export interface Planeta {
  id?: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  gravedad: number;
  habitabilidad: boolean;
  diametro: number;
}
