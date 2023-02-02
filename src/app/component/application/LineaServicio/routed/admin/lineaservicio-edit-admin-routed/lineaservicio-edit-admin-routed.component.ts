import { Component } from '@angular/core';
import { ILineaservicio, ILineaservicio2Form, ILineaservicio2Send } from '../../../../../../model/lineaservicio-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';
import { EscandalloService } from 'src/app/service/escandallo.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { IEscandallo } from 'src/app/model/escandallo-interface';
import { IServicio } from '../../../../../../model/servicio-interface';


declare let bootstrap: any;

@Component({
  selector: 'app-lineaservicio-edit-admin-routed',
  templateUrl: './lineaservicio-edit-admin-routed.component.html',
  styleUrls: ['./lineaservicio-edit-admin-routed.component.css']
})
export class LineaservicioEditAdminRoutedComponent {

  id: number = 0;
  oLineaservicio: ILineaservicio;

  oLineaservicio2Form: ILineaservicio2Form;
  oLineaservicio2Send: ILineaservicio2Send;
  oForm: FormGroup<ILineaservicio2Form>;
  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  // foreign key
  escandalloDescription: string = '';
  servicioDescription: string = '';
  //


  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oLineaservicioService: LineaservicioService,
    private oEscandalloService: EscandalloService,
    private oServicioService: ServicioService
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oLineaservicioService.getOne(this.id).subscribe({
      next: (data: ILineaservicio) => {
        this.oLineaservicio = data;
        console.log('datos: ' + data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          id_escandallo: ['',[Validators.required, Validators.pattern(/^\d{1,6}$/)],
          ],
          id_servicio: ['',[Validators.required, Validators.pattern(/^\d{1,6}$/)],
          ],
          pax: [data.pax, [Validators.required]],
        });
        this.updateEscandalloDescription(this.oLineaservicio.escandallo.id);
        this.updateServicioDescription(this.oLineaservicio.servicio.id);
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');
    this.oLineaservicio2Send = {
      id: this.oForm.value.id,
      escandallo: { id: this.oForm.value.id_escandallo },
      servicio: { id: this.oForm.value.id_servicio },
      pax: this.oForm.value.pax
    };
    if (this.oForm.valid) {
      this.oLineaservicioService.updateOne(this.oLineaservicio2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = 'Produce Catering';
          this.modalContent = 'Linea de servicio ' + this.id + ' actualizada';
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
      this.oRouter.navigate(['/admin/lineaservicio/view', this.id]);
    });
    this.myModal.show();
  };
  // foreign key escandallo
  openModalFindEscandallo(): void {
    this.myModal = new bootstrap.Modal(
      document.getElementById('findEscandallo'),
      {
        //pasar el myModal como parametro
        keyboard: false,
      }
    );
    this.myModal.show();
  }

  closeEscandalloModal(id_escandallo: number) {
    this.oForm.controls['id_escandallo'].setValue(id_escandallo);
    this.updateEscandalloDescription(id_escandallo);
    this.myModal.hide();
  }

  updateEscandalloDescription(id_escandallo: number) {
    this.oEscandalloService.getOne(id_escandallo).subscribe({
      next: (data: IEscandallo) => {
        this.escandalloDescription = data.nombre;
      },
      error: (error: any) => {
        this.escandalloDescription = 'Escandallo no encontrado';
        this.oForm.controls['id_escandallo'].setErrors({ incorrect: true });
      },
    });
  }

  // foreign key servicio
  openModalFindServicio(): void {
    this.myModal = new bootstrap.Modal(
      document.getElementById('findServicio'),
      {
        //pasar el myModal como parametro
        keyboard: false,
      }
    );
    this.myModal.show();
  }

  closeServicioModal(id_servicio: number) {
    this.oForm.controls['id_servicio'].setValue(id_servicio);
    this.updateServicioDescription(id_servicio);
    this.myModal.hide();
  }

  updateServicioDescription(id_servicio: number) {
    this.oServicioService.getOne(id_servicio).subscribe({
      next: (data: IServicio) => {
        this.servicioDescription = ""+data.id;
      },
      error: (error: any) => {
        this.servicioDescription = 'Servicio no encontrado';
        this.oForm.controls['id_servicio'].setErrors({ incorrect: true });
      },
    });
  }


}
