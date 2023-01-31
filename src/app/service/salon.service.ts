import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';
import { ISalon } from '../model/salon-interface';
import { Observable } from 'rxjs';
import { IPage } from '../model/shared-interface';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  private entityURL = '/salon';
  url: string = "";

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getSalonPlist(page: number, size: number, termino: string, id_espacio: number, strSortField: string, strOrderDirection: string): Observable<IPage<ISalon>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_espacio != 0) {
      params = params.set("espacio", id_espacio);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<ISalon>>(this.url, { params: params });
  }

  getOne(id: number): Observable<ISalon> {
    return this.oHttp.get<ISalon>(this.url + "/" + id);
  }
}
