import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from 'src/environments/environment';
import { ITipoplato, ITipoplato2Send } from '../model/tipoplato-interface';
import { IPage } from '../model/shared-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoplatoService {

  private entityURL = '/tipoplato';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getTipoplatoPlist(
    page: number, size: number, termino: string, strSortField: string, strOrderDirection: string)
    : Observable<IPage<ITipoplato>> {
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
    return this.oHttp.get<IPage<ITipoplato>>(this.url, { params: params });
  }

  getOne(id: number): Observable<ITipoplato> {
    return this.oHttp.get<ITipoplato>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oTipoplato2Send: ITipoplato2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oTipoplato2Send);
  }

  newOne(oTipoplato2Send: ITipoplato2Send): Observable<number> {
    return this.oHttp.post<number>(this.url+'/', oTipoplato2Send);
  }
}
