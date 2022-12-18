import { Pageable, Sort } from "./shared-interface";


export interface ITipousuario {
  id: number;
  tipo: string;
  usuarios: number;
}


export interface TipoUsuarioResponse {
  content: ITipousuario[];
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



