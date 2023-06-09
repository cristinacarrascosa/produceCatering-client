import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, catchError, filter, map, retry, tap, throwError } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { CryptoService } from './crypto.service';
import { DecodeService } from './decode.service';
import { IToken } from '../model/token-interface';

export enum Events {
  login,
  logout
}

export class EmitEvent {
  constructor(public event: Events, public token?: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  private entityURL = '/session';
  sURL: string = `${baseURL}${this.entityURL}`;
  subject = new Subject<EmitEvent>();


  constructor(
    private oCryptoService: CryptoService,
    private oHttpClient: HttpClient,
    private oDecodeService: DecodeService
  ) { }

  login(strLogin: string, strPassword: string): Observable<string> {
    const loginData = JSON.stringify({ login: strLogin, password: this.oCryptoService.getSHA256(strPassword) });
    console.log(this.sURL)
    return this.oHttpClient.post<string>(this.sURL, loginData, httpOptions);
  }

  getUserId(): Observable<number> {
    return this.oHttpClient.get<number>(this.sURL + "/getUserId", {withCredentials:true});
  }

  getUserName(): string {
    if (!this.isSessionActive()) {
      return "";
    } else {
      let token: string = localStorage.getItem("token");
      return this.oDecodeService.parseJwt(token).usuario;
    }
  }

  getToken(): string {
    return localStorage.getItem("token");
  }

  isSessionActive(): Boolean {
    let strToken: string = localStorage.getItem("token");
    if (strToken) {
      let oDecodedToken: IToken = this.oDecodeService.parseJwt(strToken);
      if (Date.now() >= oDecodedToken.exp * 1000) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("token");
  }

  on(event: Events): Observable<String> {
    return this.subject.pipe(
      filter((e: EmitEvent) => {
        return e.event === event;
      }),
      map((e: EmitEvent) => {
        return e.token;
      })
    )
  }

  emit(event: EmitEvent) {
    this.subject.next(event);
  }

  getTipoUsuario(): string {
    if (!this.isSessionActive()) {
        return "";
    } else {
        let token: string = localStorage.getItem("token");
        return this.oDecodeService.parseJwt(token).tipousuario;
    }
}


  // onCheck = new EventEmitter<any>();

  // handleError(error: HttpErrorResponse) {
  //   let errorMessage = 'Unknown error!';
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side errors
  //     errorMessage = `Error: ${error.error.message}`;
  //     if (environment) console.log("SessionService: error: " + errorMessage);
  //   } else {
  //     // Server-side errors
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //     if (environment) console.log("SessionService: error: " + errorMessage);
  //   }
  //   return throwError(errorMessage);
  // }

  // login(loginData: String): Observable<String> {
  //   if (environment) console.log("SessionService: login");
  //   return this.http.post<String>(this.url, loginData, httpOptions).pipe(
  //     tap((u: String) => console.log("session.service login HTTP request executed", u)),
  //     retry(1),
  //     catchError(this.handleError));
  // }

  // logout(): Observable<String> {
  //   if (environment) console.log("SessionService: logout");
  //   return this.http.delete<String>(this.url, httpOptions).pipe(
  //     retry(1),
  //     catchError(this.handleError));
  // }

  // logout(){
  //   localStorage.clear();
  //   //location.reload();
  // }

  // check(): Observable<String> {
  //   return this.http.get<String>(this.url, httpOptions)
  // }
}
