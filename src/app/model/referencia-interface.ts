import { FormControl } from '@angular/forms';
import { Pageable, Sort } from './shared-interface';

export interface IReferencia {
  id: number;
  nombre: string;
  lineasEscandallo: number;
}

export interface ReferenciaResponse {
  content: IReferencia[];
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

export interface IReferencia2Form {
  id: FormControl<number>;
  nombre: FormControl<string>;
}

export interface IReferencia2Send {
  id: number;
  nombre: string;
}
