import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import jsPDF from 'jspdf';
import  autotable from 'jspdf-autotable';
import { ILineaservicio } from 'src/app/model/lineaservicio-interface';
import { IReferencia } from 'src/app/model/referencia-interface';
import { IServicio } from 'src/app/model/servicio-interface';
import { LineaescandalloService } from 'src/app/service/lineaescandallo.service';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-servicio-view-user-routed',
  templateUrl: './servicio-view-user-routed.component.html',
  styleUrls: ['./servicio-view-user-routed.component.css']
})
export class ServicioViewUserRoutedComponent implements OnInit {

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

