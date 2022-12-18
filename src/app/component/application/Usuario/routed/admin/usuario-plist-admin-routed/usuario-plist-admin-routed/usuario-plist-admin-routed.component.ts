import { Component } from '@angular/core';
import { IUsuario, UsuarioResponse } from '../../../../../../../model/usuario-interface';
import { faEye, faUserPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-usuario-plist-admin-routed',
  templateUrl: './usuario-plist-admin-routed.component.html',
  styleUrls: ['./usuario-plist-admin-routed.component.css']
})
export class UsuarioPlistAdminRoutedComponent {

  private pListContent!: IUsuario[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oUsuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oUsuarioService.getUsuariosPlist(this.numberPage, this.pageRegister, this.termino)
      .subscribe({
        next: (resp: UsuarioResponse) => {
          this.pListContent = resp.content;
          console.log(this.pListContent);
          this.pagesCount = resp.totalPages;
          this.numberPage = resp.number;
          console.log("pagina", this.numberPage);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): IUsuario[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }


}
