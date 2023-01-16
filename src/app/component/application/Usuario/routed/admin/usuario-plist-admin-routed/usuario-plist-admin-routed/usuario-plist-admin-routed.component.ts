import { Component } from '@angular/core';
import { IUsuario, UsuarioResponse } from '../../../../../../../model/usuario-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IPage } from 'src/app/model/shared-interface';


@Component({
  selector: 'app-usuario-plist-admin-routed',
  templateUrl: './usuario-plist-admin-routed.component.html',
  styleUrls: ['./usuario-plist-admin-routed.component.css']
})
export class UsuarioPlistAdminRoutedComponent {

  responseFromServer: IPage<IUsuario>;
  //
  strTermFilter: string = "";
  id_tipousuario: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  // private pListContent!: IUsuario[];
  // private pagesCount!: number;
  // private numberPage: number = 0;
  // private pageRegister: number = 5;
  // private termino: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oUsuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oUsuarioService.getUsuarioPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_tipousuario, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IUsuario>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }




  setPage(e: number) {
    this.page = e - 1;
    this.getPage();
  }



  setRpp(rpp: number) {
    this.numberOfElements = rpp;

    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByTipousuario(id: number): void {
    this.id_tipousuario = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }



}
