import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IUsuario, UsuarioResponse, IUsuario2Send } from '../model/usuario-interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private entityURL = '/usuario';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUsuariosPlist(page: number, size: number, termino: string): Observable<UsuarioResponse> {
    let params = new HttpParams()
      .set("page", page)
      .set("size", size)
      .set("filter", termino);

    //let url: string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<UsuarioResponse>(this.url, { params: params });
  }

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
    return this.oHttp.post<number>(this.url, oUsuario2Send);
  }
}
