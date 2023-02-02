import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

import { IPage } from '../model/shared-interface';
import { ILineaservicio, ILineaservicio2Send } from '../model/lineaservicio-interface';

@Injectable({
  providedIn: 'root'
})
export class LineaservicioService {

  private entityURL = '/lineaservicio';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getLineaservicioPlist(page: number, size: number, termino: string, id_servicio: number,
    id_escandallo: number ,strSortField: string, strOrderDirection: string): Observable<IPage<ILineaservicio>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_servicio != 0) {
      params = params.set("servicio", id_servicio);
    }
    if (id_escandallo != 0) {
      params = params.set("escandallo", id_escandallo);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<ILineaservicio>>(this.url, { params: params });
  }

  getOne(id: number): Observable<ILineaservicio> {
    return this.oHttp.get<ILineaservicio>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  newOne(oLineaservicio2Send: ILineaservicio2Send): Observable<number> {
    return this.oHttp.post<number>(this.url+'/', oLineaservicio2Send);
  }

  updateOne(oLineaservicio2Send: ILineaservicio2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oLineaservicio2Send);
  }
}
