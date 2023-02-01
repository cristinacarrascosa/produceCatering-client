import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUsuario, UsuarioResponse } from '../../../../../../model/usuario-interface';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-usuario-finder-admin-unrouted',
  templateUrl: './usuario-finder-admin-unrouted.component.html',
  styleUrls: ['./usuario-finder-admin-unrouted.component.css']
})
export class UsuarioFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: IUsuario[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private strSortField: string = "";
  strOrderDirection: string = "";
  id_tipousuario: number = 0;
  //
  id_usuario: number = 0;

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
    this.oUsuarioService.getUsuarioPlist(this.numberPage, this.pageRegister, this.termino, this.id_tipousuario, this.strSortField, this.strOrderDirection )
      .subscribe({
        next: (resp: UsuarioResponse) => {
          this.pListContent = resp.content;
          this.pagesCount = resp.totalPages;
          this.numberPage = resp.number;
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

  filterByUsuario(id: number): void {
    this.id_tipousuario = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionUsuario(id: number): void {
    this.closeEvent.emit(id);
  }

}

