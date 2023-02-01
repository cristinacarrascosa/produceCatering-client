import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { IReferencia, ReferenciaResponse } from '../../../../../../model/referencia-interface';
import { ReferenciaService } from 'src/app/service/referencia.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-referencia-finder-admin-unrouted',
  templateUrl: './referencia-finder-admin-unrouted.component.html',
  styleUrls: ['./referencia-finder-admin-unrouted.component.css']
})
export class ReferenciaFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: IReferencia[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private strSortField: string = "";
  private strOrderDirection: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oReferenciaService: ReferenciaService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oReferenciaService.getReferenciaPlist(
      this.numberPage, this.pageRegister, this.termino, this.strSortField, this.strOrderDirection)
      .subscribe({
        next: (resp: ReferenciaResponse) => {
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

  getPlistContent(): IReferencia[] {
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

    this.numberPage = 0;
    this.getPage();
  }

  seleccionReferencia(id: number): void {
    this.closeEvent.emit(id);
  }

}

