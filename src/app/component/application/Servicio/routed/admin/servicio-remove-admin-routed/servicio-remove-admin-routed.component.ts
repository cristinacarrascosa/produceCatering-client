import { Component, OnInit } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';


@Component({
  selector: 'app-servicio-remove-admin-routed',
  templateUrl: './servicio-remove-admin-routed.component.html',
  styleUrls: ['./servicio-remove-admin-routed.component.css']
})
export class ServicioRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  oServicio!: IServicio;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
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
        }
      })
    }

    removeOne() {
      this.oServicioService.removeOne(this.id).subscribe({
        next: (data: number) => {
          this.msg = "Servicio " + this.id + " borrado";
          //open bootstrap modal here
          alert(this.msg);
          this.oLocation.back();
        }
      })
    }

}

