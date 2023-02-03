import { FormControl } from "@angular/forms";
import { ISalon } from "./salon-interface";
import { IEntity, Pageable, Sort } from "./shared-interface";
import { IUsuario } from "./usuario-interface";



  export interface IServicio {
      id: number;
      fechahora: Date;
      comensales: number;
      usuario: IUsuario;
      salon: ISalon;
      lineasServicio: number;
      fechaHora: Date;
  }


  export interface ServicioResponse {
      content: IServicio[];
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

  export interface IServicio2Form {
    id: FormControl<number>;
    fechahora: FormControl<string>;
    comensales: FormControl<number>;
    id_usuario: FormControl<number>;
    id_salon: FormControl<number>;


}

export interface IServicio2Send {
  id: number;
  //fechahora: string;
  fechaHora: string;
  comensales: number;
  usuario: IEntity;
  salon: IEntity;
}




