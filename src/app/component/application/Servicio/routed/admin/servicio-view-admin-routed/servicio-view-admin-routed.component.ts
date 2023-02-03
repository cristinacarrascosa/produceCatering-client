import { Component, OnInit } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ServicioService } from 'src/app/service/servicio.service';
import jsPDF from 'jspdf';
import  autotable from 'jspdf-autotable';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';
import { ILineaservicio } from '../../../../../../model/lineaservicio-interface';
import { LineaescandalloService } from '../../../../../../service/lineaescandallo.service';
import { IReferencia } from '../../../../../../model/referencia-interface';


@Component({
  selector: 'app-servicio-view-admin-routed',
  templateUrl: './servicio-view-admin-routed.component.html',
  styleUrls: ['./servicio-view-admin-routed.component.css']
})
export class ServicioViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oServicio!: IServicio;
  oLineaServicio: ILineaservicio;
  oReferencia: IReferencia[] = [];

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    private oServicioService: ServicioService,
    private oLineaservicioService: LineaservicioService,
    private oLineaEscandalloService: LineaescandalloService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
    this.getOne();
    this.getLineaservicio();
  }

  getOne() {
    this.oServicioService.getOne(this.id).subscribe({
      next: (data: IServicio) => {
        this.oServicio = data;
        console.log(data);
        //this.oLocation.back();
      }
    })
  }

  getLineaservicio() {
    this.oLineaservicioService.getLineaservicioPlist(0, 9999, null, this.id, 0, "", "")
    .subscribe({
      next: (data: any) => {
        //console.log(data.content);
        this.oLineaServicio = data.content;
        this.getReferencia();
      }
    });
  }

  getReferencia() {
    let lineasServicio: any = this.oLineaServicio;
    lineasServicio.forEach(element => {
      //console.log(element);
      this.oLineaEscandalloService.getLineaescandalloPlist(0, 9999, '', element.escandallo.id, 0, '', '')
      .subscribe({
        next: (data: any) => {
          this.oReferencia.push(data.content);
        }
      });
    });
    //console.log(this.oReferencia);
  }

  imprimirEtiquetas() {
    const doc = new jsPDF();
    doc.text(this.oServicio.id+ " - "+ this.oServicio.salon.nombre, 10, 10);
    doc.setFontSize(12);
    doc.text("Fecha: " + this.oLineaServicio[0].servicio.fechaHora, 10, 17);
    doc.text("Pax: " + this.oLineaServicio[0].pax, 10, 22);
    doc.text("Escandallo: " + this.oLineaServicio[0].escandallo.nombre, 10, 27);
    doc.text("Referencia: " + this.oReferencia[0][0].referencia.nombre, 10, 32);
    //doc.text(this..pax+ "", 10, 24);
    doc.save('a4.pdf');
  }
}


