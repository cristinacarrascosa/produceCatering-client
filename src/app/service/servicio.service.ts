import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/shared-interface';
import { IServicio } from '../model/servicio-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private entityURL = '/servicio';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getServicioPlist(page: number, size: number, termino: string, id_usuario: number, id_salon: number ,strSortField: string, strOrderDirection: string): Observable<IPage<IServicio>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_usuario != 0) {
      params = params.set("usuario", id_usuario);
    }
    if (id_salon != 0) {
      params = params.set("salon", id_salon);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IServicio>>(this.url, { params: params });
  }
}
