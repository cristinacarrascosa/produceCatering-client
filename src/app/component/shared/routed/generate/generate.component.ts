import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { CountService } from 'src/app/service/count.service';
import { GenerateService } from 'src/app/service/generate.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  oUserSession: IUsuario;
  nUsuarios: number = 0;
  nTiposDeUsuario: number = 0;
  strResult: string = "";
  bLoading: boolean = false;

  constructor(
    public oGenerateService: GenerateService,
    public oCountService: CountService,
    private oActivatedRoute: ActivatedRoute,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) {


    this.getCount();
  }

  ngOnInit(): void {
  }

  getCount(): void {
    this.bLoading = true;
    this.oCountService.getCountUsuarios().subscribe((n: number) => this.nUsuarios = n);
    this.oCountService.getCountTiposUsuario().subscribe((n: number) => this.nTiposDeUsuario = n);
    this.bLoading = false;
  }

  generateUsuarios(n: number): void {
    this.bLoading = true;
    this.oGenerateService.generateUsuarios(n).subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " usuarios";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  generateTiposDeUsuario() {
    this.bLoading = true;
    this.oGenerateService.generateTiposDeUsuario().subscribe(
      (num: number) => {
        this.strResult = "Ahora hay " + num + " tipos de producto";
        this.bLoading = false;
        this.openModal();
      },
      err => {
        this.strResult = "ERROR: " + err.message;
        console.error('ERROR: ', err);
        this.bLoading = false;
        this.openModal();
      })
  }

  eventsModalSubject: Subject<string> = new Subject<string>();

  openModal() {
    this.eventsModalSubject.next('open');
  }

  onCloseModal() {
    this.getCount();
    this.strResult = "";
  }

}
