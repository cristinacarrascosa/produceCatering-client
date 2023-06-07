import { Component, OnInit } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ServicioService } from 'src/app/service/servicio.service';
import jsPDF from 'jspdf';
import autotable from 'jspdf-autotable';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';
import { ILineaservicio } from '../../../../../../model/lineaservicio-interface';
import { LineaescandalloService } from '../../../../../../service/lineaescandallo.service';
import { IReferencia } from '../../../../../../model/referencia-interface';
import { filter } from 'rxjs';

@Component({
  selector: 'app-servicio-view-admin-routed',
  templateUrl: './servicio-view-admin-routed.component.html',
  styleUrls: ['./servicio-view-admin-routed.component.css'],
})
export class ServicioViewAdminRoutedComponent implements OnInit {
  id: number = 0;
  oServicio!: IServicio;
  oLineaServicio: ILineaservicio;
  oReferencia: any[] = [];

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
      },
    });
  }

  getLineaservicio() {
    this.oLineaservicioService
      .getLineaservicioPlist(0, 9999, null, this.id, 0, '', '')
      .subscribe({
        next: (data: any) => {
          //console.log(data.content);
          this.oLineaServicio = data.content;
          this.getReferencia();
        },
      });
  }

  getReferencia() {
    let lineasServicio: any = this.oLineaServicio;
    lineasServicio.forEach((element) => {
      //console.log(element);
      this.oLineaEscandalloService
        .getLineaescandalloPlist(0, 9999, '', element.escandallo.id, 0, '', '')
        .subscribe({
          next: (data: any) => {
            this.oReferencia.push(data.content);
          },
        });
    });
  }

  imprimirEtiquetas() {
    const doc = new jsPDF();
    console.log('length: ' + this.oReferencia.length);
    let y = 10;
    let cont = 0;
    let x = 10;

    //const lines = doc.splitTextToSize(text, 80);

    /**ESTO IMPRIME UNA ETIQUETA CON EL ESCANDALLO Y LAS REFERENCIAS */
    // for (let index = 0; index < this.oReferencia.length; index++) {

    //   doc.text(this.oServicio.id+ " - "+ this.oServicio.salon.nombre, 10, y);
    //   doc.setFontSize(12);
    //   doc.text("Fecha: " + this.oLineaServicio[index].servicio.fechaHora, 10, y+=7);
    //   doc.text("Pax: " + this.oLineaServicio[index].pax, 10, y+=5);
    //   doc.text("Escandallo: " + this.oLineaServicio[index].escandallo.nombre, 10, y+=5);

    //   for (let j = 0; j < this.oReferencia[index].length; j++) {
    //     doc.text("Referencia: " + this.oReferencia[index][j].referencia.nombre, 10, y+=5);

    //   }
    //   y+=10;
    // }

    for (let i = 0; i < this.oReferencia.length; i++) {
      for (let j = 0; j < this.oReferencia[i].length; j++) {
        if (cont >= 10) {
          x += 50;
          doc.addPage();
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(this.oServicio.id + ' - ' + this.oServicio.salon.nombre+" - Plato "+(i+1)+" de "+this.oReferencia.length, x, y);
        doc.text(
          'Fecha: ' + this.oLineaServicio[i].servicio.fechaHora,
          x,
          (y += 7)
        );
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text('Pax: ' +this.oLineaServicio[i].pax, x, (y += 5));
        doc.text(
          'Escandallo Id:' + this.oLineaServicio[i].escandallo.id+" - " +this.oLineaServicio[i].escandallo.nombre,
          x,
          (y += 5)
        );
        doc.text(
          'Referencia '+(j+1)+" de "+this.oReferencia[i].length +" - "+ this.oReferencia[i][j].referencia.nombre+' - IDEscandallo' + this.oReferencia[i][j].escandallo.id,
          x,
          (y += 5)
        );
        console.log(this.oReferencia[i][j].escandallo.id+" - "+this.oReferencia[i][j].escandallo.nombre);

        y += 10;
        cont++;
      }
    }

    /** ESTO IMPRIME SOLO UNA ETIQUETA CON EL ESCANDALLO Y LA PRIMERA REFERENCIA */
    // doc.text(this.oServicio.id+ " - "+ this.oServicio.salon.nombre, 10, 10);
    // doc.setFontSize(12);
    // doc.text("Fecha: " + this.oLineaServicio[0].servicio.fechaHora, 10, 17);
    // doc.text("Pax: " + this.oLineaServicio[0].pax, 10, 22);
    // doc.text("Escandallo: " + this.oLineaServicio[0].escandallo.nombre, 10, 27);
    // doc.text("Referencia: " + this.oReferencia[0][0].referencia.nombre, 10, 32);
    //doc.text(this..pax+ "", 10, 24);
    doc.save('a4.pdf');
  }
}
