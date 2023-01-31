import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EspacioResponse, IEspacio } from '../../../../../../model/espacio-interface';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { EspacioService } from 'src/app/service/espacio.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-espacio-finder-admin-unrouted',
  templateUrl: './espacio-finder-admin-unrouted.component.html',
  styleUrls: ['./espacio-finder-admin-unrouted.component.css']
})
export class EspacioFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: IEspacio[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private strSortField: string = "";
  private strOrderDirection: string = "";

  id_espacio: number = 0;

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oEspacioService: EspacioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oEspacioService.getUsuarioPlist(this.numberPage, this.pageRegister, this.termino, this.strSortField, this.strOrderDirection)
      .subscribe({
        next: (resp: EspacioResponse) => {
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

  getPlistContent(): IEspacio[] {
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

  filterByEspacio(id: number): void {
    this.id_espacio = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionEspacio(id: number): void {
    this.closeEvent.emit(id);
  }


}

