import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EscandalloResponse, IEscandallo } from 'src/app/model/escandallo-interface';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { EscandalloService } from 'src/app/service/escandallo.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-escandallo-finder-admin-unrouted',
  templateUrl: './escandallo-finder-admin-unrouted.component.html',
  styleUrls: ['./escandallo-finder-admin-unrouted.component.css']
})
export class EscandalloFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: IEscandallo[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private strSortField: string = "";
  private strOrderDirection: string = "";

  id_tipoplato: number = 0;

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oEscandalloService: EscandalloService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oEscandalloService.getEscandalloPlist(
      this.numberPage, this.pagesCount, this.termino, this.id_tipoplato, this.strSortField, this.strOrderDirection)
      .subscribe({
        next: (resp: EscandalloResponse) => {
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

  getPlistContent(): IEscandallo[] {
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

  filterByEscandallo(id: number): void {
    this.id_tipoplato = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionEscandallo(id: number): void {
    this.closeEvent.emit(id);
  }

}


