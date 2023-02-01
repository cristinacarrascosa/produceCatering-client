import { FormControl } from '@angular/forms';
import { Pageable, Sort } from './shared-interface';

export interface ITipoplato {
  id: number;
  nombre: string;
  escandallos: number;
}

export interface TipoplatoResponse {
  content: ITipoplato[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface ITipoplato2Form {
  id: FormControl<number>;
  nombre: FormControl<string>;
}

export interface ITipoplato2Send {
  id: number;
  nombre: string;
}
