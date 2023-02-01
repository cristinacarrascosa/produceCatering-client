import { Injectable } from '@angular/core';
import { ILineaescandallo, ILineaescandallo2Send } from '../model/lineaescandallo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IPage } from '../model/shared-interface';

@Injectable({
  providedIn: 'root'
})
export class LineaescandalloService {

  private entityURL = '/lineaescandallo';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getLineaescandalloPlist(page: number, size: number, termino: string, id_escandallo: number,
    id_referencia: number ,strSortField: string, strOrderDirection: string): Observable<IPage<ILineaescandallo>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_escandallo != 0) {
      params = params.set("usuario", id_escandallo);
    }
    if (id_referencia != 0) {
      params = params.set("salon", id_referencia);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<ILineaescandallo>>(this.url, { params: params });
  }

  getOne(id: number): Observable<ILineaescandallo> {
    return this.oHttp.get<ILineaescandallo>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  newOne(oLineaescandallo2Send: ILineaescandallo2Send): Observable<number> {
    return this.oHttp.post<number>(this.url+'/', oLineaescandallo2Send);
  }

  updateOne(oLineaescandallo2Send: ILineaescandallo2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oLineaescandallo2Send);
  }
}
