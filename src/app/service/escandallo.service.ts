import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/shared-interface';
import { IEscandallo, IEscandallo2Send } from '../model/escandallo-interface';

@Injectable({
  providedIn: 'root'
})
export class EscandalloService {

  private entityURL = '/escandallo';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getEscandalloPlist(page: number, size: number, termino: string, id_tipoplato: number, strSortField: string, strOrderDirection: string): Observable<IPage<IEscandallo>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_tipoplato != 0) {
      params = params.set("tipoplato", id_tipoplato);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IEscandallo>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IEscandallo> {
    return this.oHttp.get<IEscandallo>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oEscandallo2Send: IEscandallo2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oEscandallo2Send);
  }

  newOne(oEscandallo2Send: IEscandallo2Send): Observable<number> {
    return this.oHttp.post<number>(this.url+'/', oEscandallo2Send);
  }
}
