import { Pageable, Sort } from "./shared-interface";
import { ITipousuario } from "./tipousuario-interface";




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



