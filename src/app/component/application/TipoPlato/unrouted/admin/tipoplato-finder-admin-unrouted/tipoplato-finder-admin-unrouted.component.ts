import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITipoplato, TipoplatoResponse } from '../../../../../../model/tipoplato-interface';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { TipoplatoService } from 'src/app/service/tipoplato.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-tipoplato-finder-admin-unrouted',
  templateUrl: './tipoplato-finder-admin-unrouted.component.html',
  styleUrls: ['./tipoplato-finder-admin-unrouted.component.css']
})
export class TipoplatoFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: ITipoplato[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private strSortField: string = "";
  strOrderDirection: string = "";

  //


  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(private oTipoPlatoService: TipoplatoService) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oTipoPlatoService.getTipoplatoPlist(this.numberPage, this.pageRegister, this.termino, this.strSortField, this.strOrderDirection )
      .subscribe({
        next: (resp: TipoplatoResponse) => {
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

  getPlistContent(): ITipoplato[] {
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
    this.numberPage = 0;
    this.getPage();
  }

  selectionTipoplato(id: number): void {
    this.closeEvent.emit(id);
  }

}

