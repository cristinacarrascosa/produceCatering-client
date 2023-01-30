import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPage } from '../model/shared-interface';
import { IEspacio } from '../model/espacio-interface';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {

  private entityURL = '/espacio';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUsuarioPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<IEspacio>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);

    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IEspacio>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IEspacio> {
    return this.oHttp.get<IEspacio>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }
}
