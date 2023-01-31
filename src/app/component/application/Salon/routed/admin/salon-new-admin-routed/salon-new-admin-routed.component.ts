import { Component, OnInit } from '@angular/core';
import { ISalon, ISalon2Form, ISalon2Send } from '../../../../../../model/salon-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { MetadataService } from 'src/app/service/metadata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EspacioService } from 'src/app/service/espacio.service';
import { SalonService } from 'src/app/service/salon.service';
import { IEspacio } from '../../../../../../model/espacio-interface';


declare let bootstrap: any;
@Component({
  selector: 'app-salon-new-admin-routed',
  templateUrl: './salon-new-admin-routed.component.html',
  styleUrls: ['./salon-new-admin-routed.component.css']
})
export class SalonNewAdminRoutedComponent implements OnInit {

  oSalon: ISalon = null;
  oSalon2Form: ISalon2Form;
  oSalon2Send: ISalon2Send;
  oForm: FormGroup<ISalon2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreign key
  espacioDescription: string = "";

  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oSalonService: SalonService,
    private oEspacioService: EspacioService
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      id_espacio: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oSalon2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      espacio: { id: this.oForm.value.id_espacio }

    }
    if (this.oForm.valid) {
      this.oSalonService.newOne(this.oSalon2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Salon " + this.oSalon2Send.id + " creado";
          this.showModal();
        }, error: (error: any) => {
          console.log(error);
          const wapper = document.createElement('div');

          if (error.error.message == "error de validación: campo DNI de Usuario") {
            wapper.innerHTML = [
              `<div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>DNI inexistente!</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            ].join('');
          } else {
            wapper.innerHTML = [
              `<div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Login duplicado!</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            ].join('');
          }
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
      this.oRouter.navigate(['/admin/salon/plist'])
    })
    this.myModal.show()
  }

  openModalFindEspacio(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findEspacio"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeEspacioModal(id_espacio: number) {
    this.oForm.controls['id_espacio'].setValue(id_espacio);
    this.updateEspacioDescription(id_espacio);
    this.myModal.hide();
  }

  updateEspacioDescription(id_espacio: number) {
    this.oEspacioService.getOne(id_espacio).subscribe({
      next: (data: IEspacio) => {
        this.espacioDescription = data.nombre;
      },
      error: (error: any) => {
        this.espacioDescription = "Espacio no encontrado";
        this.oForm.controls['id_espacio'].setErrors({ 'incorrect': true });
      }
    })
  }

  openModalFindUsertype(): void {

  }


}

