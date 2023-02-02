import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IServicio, ServicioResponse } from 'src/app/model/servicio-interface';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { ServicioService } from 'src/app/service/servicio.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-servicio-finder-admin-unrouted',
  templateUrl: './servicio-finder-admin-unrouted.component.html',
  styleUrls: ['./servicio-finder-admin-unrouted.component.css']
})
export class ServicioFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: IServicio[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private strSortField: string = "";
  private strOrderDirection: string = "";

  id_usuario: number = 0;
  id_salon: number = 0;

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oServicioService: ServicioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oServicioService.getServicioPlist(
      this.numberPage, this.pageRegister, this.termino,this.id_usuario,
      this.id_salon, this.strSortField, this.strOrderDirection
       )
      .subscribe({
        next: (resp: ServicioResponse) => {
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

  getPlistContent(): IServicio[] {
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

  filterByServicio(id: number): void {
    this.id_usuario = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionServicio(id: number): void {
    this.closeEvent.emit(id);
  }

}
