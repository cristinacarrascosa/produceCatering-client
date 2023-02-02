import { FormControl } from "@angular/forms";
import { IEscandallo } from "./escandallo-interface";
import { IServicio } from "./servicio-interface";
import { IEntity, Pageable, Sort } from "./shared-interface";





  export interface ILineaservicio {
      id: number;
      pax: number;
      servicio: IServicio;
      escandallo: IEscandallo;
  }


  export interface LineaservicioResponse {
      content: ILineaservicio[];
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

  export interface ILineaservicio2Form {
    id: FormControl<number>;
    pax: FormControl<number>;
    id_servicio: FormControl<number>;
    id_escandallo: FormControl<number>;
}

export interface ILineaservicio2Send {
  id: number;
  pax: number;
  servicio: IEntity;
  escandallo: IEntity;
}






