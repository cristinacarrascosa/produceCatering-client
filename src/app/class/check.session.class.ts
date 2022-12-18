import { IUsuario } from '../model/usuario-interface';
import { ActivatedRoute, Router } from "@angular/router";


export class CheckSessionClass {

  oUsuarioSession!: IUsuario;

  constructor(
    profile: string,
    protected oRouter: Router,
    protected oRoute: ActivatedRoute,
  ) {
    if (this.oRoute.snapshot.data['message']) {
      this.oUsuarioSession = this.oRoute.snapshot.data['message'];
      if (this.oUsuarioSession.tipousuario.tipo == profile) {
          localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data['message']));
      } else {
          localStorage.clear();
          this.oRouter.navigate(['/','home']);
      }
  } else {
      localStorage.clear();
      this.oRouter.navigate(['/','home']);
  }
  }




}
