import { Pageable, Sort } from "./shared-interface";

  export interface IEspacio {
      id: number;
      nombre: string;
      direccion: string;
      telefono: string;
      salones: number;
  }


  export interface EspacioResponse {
      content: IEspacio[];
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



