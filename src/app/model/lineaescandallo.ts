import { FormControl } from "@angular/forms";
import { IEscandallo } from "./escandallo-interface";
import { IReferencia } from "./referencia-interface";
import { IEntity, Pageable, Sort } from "./shared-interface";




  export interface ILineaescandallo {
      id: number;
      escandallo: IEscandallo;
      referencia: IReferencia;
  }

  export interface LineaescandalloResponse {
      content: ILineaescandallo[];
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

  export interface ILineaescandallo2Form {
    id: FormControl<number>;
    escandallo: FormControl<number>;
    referencia: FormControl<number>;
}

export interface ILineaescandallo2Send {
  id: number
  escandallo: IEntity;
  referencia: IEntity;
}





