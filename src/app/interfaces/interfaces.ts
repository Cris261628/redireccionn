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
