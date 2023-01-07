import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IUsuario, UsuarioResponse, IUsuario2Send } from '../model/usuario-interface';
import { IPage } from '../model/shared-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private entityURL = '/usuario';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUsuarioPlist(page: number, size: number, termino: string, id_tipousuario: number, strSortField: string, strOrderDirection: string): Observable<IPage<IUsuario>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_tipousuario != 0) {
      params = params.set("tipousuario", id_tipousuario);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUsuario>>(this.url, { params: params });
  }

  // getUsuariosPlist(page: number, size: number, termino: string): Observable<UsuarioResponse> {
  //   let params = new HttpParams()
  //     .set("page", page)
  //     .set("size", size)
  //     .set("filter", termino);

  //   //let url: string = `${baseURL}${this.entityURL}`;
  //   return this.oHttp.get<UsuarioResponse>(this.url, { params: params });
  // }

  getOne(id: number): Observable<IUsuario> {
    return this.oHttp.get<IUsuario>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oUsuario2Send);
  }

  newOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.post<number>(this.url+'/', oUsuario2Send);
  }
}
