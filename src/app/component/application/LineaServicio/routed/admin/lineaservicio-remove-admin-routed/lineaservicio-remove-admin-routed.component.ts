import { Component, OnInit } from '@angular/core';
import { ILineaservicio } from '../../../../../../model/lineaservicio-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';


@Component({
  selector: 'app-lineaservicio-remove-admin-routed',
  templateUrl: './lineaservicio-remove-admin-routed.component.html',
  styleUrls: ['./lineaservicio-remove-admin-routed.component.css']
})
export class LineaservicioRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = '';
  oLineaservicio!: ILineaservicio;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
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
      },
    });
  }

  removeOne() {
    this.oLineaservicioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = 'Línea de servicio ' + this.id + ' borrada';
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      },
    });
  }

}

