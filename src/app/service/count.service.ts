import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor(private http: HttpClient) { }

  getCountUsuarios(): Observable<number> {
    return this.http.get<number>(baseURL + '/usuario/count', httpOptions);
  }

  getCountTiposUsuario(): Observable<number> {
    return this.http.get<number>(baseURL + '/tipousuario/count', httpOptions);
  }
}
