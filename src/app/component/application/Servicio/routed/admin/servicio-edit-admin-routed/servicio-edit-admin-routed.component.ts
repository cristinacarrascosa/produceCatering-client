import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IServicio,
  IServicio2Form,
  IServicio2Send,
} from 'src/app/model/servicio-interface';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SalonService } from 'src/app/service/salon.service';
import { IUsuario } from '../../../../../../model/usuario-interface';
import { ISalon } from '../../../../../../model/salon-interface';

declare let bootstrap: any;

@Component({
  selector: 'app-servicio-edit-admin-routed',
  templateUrl: './servicio-edit-admin-routed.component.html',
  styleUrls: ['./servicio-edit-admin-routed.component.css'],
})
export class ServicioEditAdminRoutedComponent implements OnInit {
  id: number = 0;
  oServicio: IServicio;

  oServicio2Form: IServicio2Form;
  oServicio2Send: IServicio2Send;
  oForm: FormGroup<IServicio2Form>;
  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  // foreign key
  usuarioDescription: string = '';
  salonDescription: string = '';
  //
  fechahora: Date;

  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oServicioService: ServicioService,
    private oUsuarioService: UsuarioService,
    private oSalonService: SalonService
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oServicioService.getOne(this.id).subscribe({
      next: (data: IServicio) => {
        this.oServicio = data;
        console.log('datos: ' + data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          comensales: [data.comensales, [Validators.required]],
          fechahora: [data.fechahora, [Validators.required]],
          id_usuario: [data.usuario.nombre + ' ' + data.usuario.apellidos, [Validators.required]],
          id_salon: [data.salon.nombre, [Validators.required]]
        });
        this.updateUsuarioDescription(this.oServicio.usuario.id);
        this.updateSalonDescription(this.oServicio.salon.id);
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');
    this.oServicio2Send = {
      id: this.oForm.value.id,
      comensales: this.oForm.value.comensales,
      fechahora: this.oForm.value.fechahora,
      usuario: { id: this.oForm.value.id_usuario },
      salon: { id: this.oForm.value.id_salon },
    };
    if (this.oForm.valid) {
      this.oServicioService.updateOne(this.oServicio2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = 'Produce Catering';
          this.modalContent = 'Servicio ' + this.id + ' actualizado';
          this.showModal();
        },
      });
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/servicio/view', this.id]);
    });
    this.myModal.show();
  };
  // foreign key usuario
  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(
      document.getElementById('findUsuario'),
      {
        //pasar el myModal como parametro
        keyboard: false,
      }
    );
    this.myModal.show();
  }

  closeUsuarioModal(id_usuario: number) {
    this.oForm.controls['id_usuario'].setValue(id_usuario);
    this.updateUsuarioDescription(id_usuario);
    this.myModal.hide();
  }

  updateUsuarioDescription(id_usuario: number) {
    this.oUsuarioService.getOne(id_usuario).subscribe({
      next: (data: IUsuario) => {
        this.usuarioDescription = data.nombre + ' ' + data.apellidos;
      },
      error: (error: any) => {
        this.usuarioDescription = 'Usuario no encontrado';
        this.oForm.controls['id_usuario'].setErrors({ incorrect: true });
      },
    });
  }

  // foreign key salon
  openModalFindSalon(): void {
    this.myModal = new bootstrap.Modal(
      document.getElementById('findSalon'),
      {
        //pasar el myModal como parametro
        keyboard: false,
      }
    );
    this.myModal.show();
  }

  closeSalonModal(id_salon: number) {
    this.oForm.controls['id_salon'].setValue(id_salon);
    this.updateSalonDescription(id_salon);
    this.myModal.hide();
  }

  updateSalonDescription(id_salon: number) {
    this.oSalonService.getOne(id_salon).subscribe({
      next: (data: ISalon) => {
        this.salonDescription = data.nombre;
      },
      error: (error: any) => {
        this.salonDescription = 'Salon no encontrado';
        this.oForm.controls['id_salon'].setErrors({ incorrect: true });
      },
    });
  }


}
