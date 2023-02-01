import { Injectable } from '@angular/core';
import { IReferencia, IReferencia2Send } from '../model/referencia-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/shared-interface';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {

  private entityURL = '/referencia';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getReferenciaPlist(
    page: number, size: number, termino: string, strSortField: string, strOrderDirection: string)
    : Observable<IPage<IReferencia>> {
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
    return this.oHttp.get<IPage<IReferencia>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IReferencia> {
    return this.oHttp.get<IReferencia>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oReferencia2Send: IReferencia2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oReferencia2Send);
  }

  newOne(oReferencia2Send: IReferencia2Send): Observable<number> {
    return this.oHttp.post<number>(this.url+'/', oReferencia2Send);
  }
}
