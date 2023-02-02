import { Component, OnInit } from '@angular/core';
import { ILineaservicio } from '../../../../../../model/lineaservicio-interface';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lineaservicio-view-admin-routed',
  templateUrl: './lineaservicio-view-admin-routed.component.html',
  styleUrls: ['./lineaservicio-view-admin-routed.component.css']
})
export class LineaservicioViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oLineaservicio!: ILineaservicio;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    private oLineaservicioService: LineaservicioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oLineaservicioService.getOne(this.id).subscribe({
      next: (data: ILineaservicio) => {
        this.oLineaservicio = data;
        console.log(data);
        //this.oLocation.back();
      }
    })
  }


}

