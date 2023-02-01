import { FormControl } from "@angular/forms";
import { IEntity, Pageable, Sort } from "./shared-interface";
import { ITipoplato } from "./tipoplato-interface";





  export interface IEscandallo {
      id: number;
      nombre: string;
      lineasServicio: number;
      lineasEscandallo: number;
      tipoplato: ITipoplato;
  }



  export interface EscandalloResponse {
      content: IEscandallo[];
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

  export interface IEscandallo2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;
    id_tipoplato: FormControl<number>;
}

export interface IEscandallo2Send {
  id: number;
  nombre: string;
  tipoplato: IEntity;
}



