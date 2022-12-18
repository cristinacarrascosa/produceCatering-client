import { Pageable, Sort, IEntity } from './shared-interface';
import { ITipousuario } from "./tipousuario-interface";
import { FormControl } from "@angular/forms";




export interface IUsuario {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  login: string;
  tipousuario: ITipousuario;
  servicios: number;
}


export interface UsuarioResponse {
  content: IUsuario[];
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

export interface IUsuario2Form {
  id: FormControl<number>;
  nombre: FormControl<string>;
  apellidos: FormControl<string>;
  dni: FormControl<string>;
  email: FormControl<string>;
  login: FormControl<string>;
  id_tipousuario: FormControl<number>;

}

export interface IUsuario2Send {
  id: number;
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  login: string;
  tipousuario: IEntity;

}


