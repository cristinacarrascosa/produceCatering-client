import { FormControl } from '@angular/forms';
import { IEspacio } from './espacio-interface';
import { Pageable, Sort } from './shared-interface';

export interface ISalon {
  id: number;
  nombre: string;
  espacio: IEspacio;
  servicios: number;
}

export interface SalonResponse {
  content: ISalon[];
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

export interface ISalon2Form {
  id: FormControl<number>;
  nombre: FormControl<string>;
  id_espacio: IEspacio;
}

export interface ISalon2Send {
  id: number;
  nombre: string;
  espacio: IEspacio;
}
