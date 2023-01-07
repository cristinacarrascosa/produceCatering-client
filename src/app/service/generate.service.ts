import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  constructor(private http: HttpClient) { }

  generateUsuarios(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/usuario/generate/' + n, { amount: n }, httpOptions);
  }

  generateTiposDeUsuario(): Observable<number> {
    return this.http.post<number>(baseURL + '/tipousuario/generate', "", httpOptions);
  }
}
