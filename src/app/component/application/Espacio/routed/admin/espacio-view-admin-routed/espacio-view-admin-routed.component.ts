import { Component, OnInit } from '@angular/core';
import { IEspacio } from 'src/app/model/espacio-interface';
import { ActivatedRoute } from '@angular/router';
import { EspacioService } from 'src/app/service/espacio.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-espacio-view-admin-routed',
  templateUrl: './espacio-view-admin-routed.component.html',
  styleUrls: ['./espacio-view-admin-routed.component.css']
})
export class EspacioViewAdminRoutedComponent implements OnInit {

  id: number;
  oEspacio!: IEspacio;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oEspacioService: EspacioService,
    public oMetadataService: MetadataService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oEspacioService.getOne(this.id).subscribe({
      next: (data: IEspacio) => {
        this.oEspacio = data;
        //console.log(data);
        //this.oLocation.back();
      }
    })
  }

}

