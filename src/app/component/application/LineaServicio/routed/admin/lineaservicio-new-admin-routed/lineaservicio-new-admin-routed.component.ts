import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ILineaservicio, ILineaservicio2Form, ILineaservicio2Send } from '../../../../../../model/lineaservicio-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';

import { ServicioService } from 'src/app/service/servicio.service';
import { IEscandallo } from 'src/app/model/escandallo-interface';
import { IServicio } from 'src/app/model/servicio-interface';
import { EscandalloService } from 'src/app/service/escandallo.service';


declare let bootstrap: any;

@Component({
  selector: 'app-lineaservicio-new-admin-routed',
  templateUrl: './lineaservicio-new-admin-routed.component.html',
  styleUrls: ['./lineaservicio-new-admin-routed.component.css']
})
export class LineaservicioNewAdminRoutedComponent implements OnInit {

  oLineaservicio: ILineaservicio = null;
  oLineaservicio2Form: ILineaservicio2Form;
  oLineaservicio2Send: ILineaservicio2Send;
  oForm: FormGroup<ILineaservicio2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreign key
  escandalloDescription: string = "";
  servicioDescription: string = "";
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
  ) { }



  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      id_escandallo: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_servicio: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      pax: ["", [Validators.required]],
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oLineaservicio2Send = {
      id: this.oForm.value.id,
      escandallo: { id: this.oForm.value.id_escandallo },
      servicio: { id: this.oForm.value.id_servicio },
      pax: this.oForm.value.pax,

    }
    if (this.oForm.valid) {
      this.oLineaservicioService.newOne(this.oLineaservicio2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Linea de Servicio " + this.oLineaservicio2Send.id + " creada";
          this.showModal();
        }, error: (error: any) => {
          console.log(error);
          const wapper = document.createElement('div');

          // if (error.error.message == "error de validación: campo DNI de Usuario") {
          //   wapper.innerHTML = [
          //     `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          //     <strong>DNI inexistente!</strong>
          //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          //   </div>`
          //   ].join('');
          // } else {
          //   wapper.innerHTML = [
          //     `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          //     <strong>Login duplicado!</strong>
          //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          //     </div>`
          //   ].join('');
          // }
          const alertPlaceholder = document.getElementById('alert');
          alertPlaceholder.append(wapper);
          setTimeout(() => {
            wapper.classList.add('d-none');
          }, 5000);
        }
      })
    } else {
      //console.log("Formulario no válido");
      //alert("Formulario no válido");
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/lineaservicio/plist'])
    })
    this.myModal.show()
  }

  // foreign key escandallo
  openModalFindEscandallo(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findEscandallo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


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
        this.escandalloDescription = "Escandallo no encontrado";
        this.oForm.controls['id_escandallo'].setErrors({ 'incorrect': true });
      }
    })
  }

  // foreign key Servicio
  openModalFindServicio(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findServicio"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


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
        this.servicioDescription = "Servicio no encontrado";
        this.oForm.controls['id_servicio'].setErrors({ 'incorrect': true });
      }
    })
  }

}

