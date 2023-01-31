import { Component, OnInit } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ServicioService } from 'src/app/service/servicio.service';


@Component({
  selector: 'app-servicio-view-admin-routed',
  templateUrl: './servicio-view-admin-routed.component.html',
  styleUrls: ['./servicio-view-admin-routed.component.css']
})
export class ServicioViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oServicio!: IServicio;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    private oServicioService: ServicioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
    this.getOne();
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
}


