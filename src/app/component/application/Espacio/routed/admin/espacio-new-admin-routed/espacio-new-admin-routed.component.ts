import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { IEspacio, IEspacio2Form, IEspacio2Send } from 'src/app/model/espacio-interface';
import { MetadataService } from 'src/app/service/metadata.service';
import { EspacioService } from 'src/app/service/espacio.service';

declare let bootstrap: any;

@Component({
  selector: 'app-espacio-new-admin-routed',
  templateUrl: './espacio-new-admin-routed.component.html',
  styleUrls: ['./espacio-new-admin-routed.component.css']
})
export class EspacioNewAdminRoutedComponent implements OnInit {

  oEspacio: IEspacio = null;
  oEspacio2Form: IEspacio2Form;
  oEspacio2Send: IEspacio2Send;
  oForm: FormGroup<IEspacio2Form>;

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oEspacioService: EspacioService
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      direccion: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      telefono: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],

    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oEspacio2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      direccion: this.oForm.value.direccion,
      telefono: this.oForm.value.telefono
    }
    if (this.oForm.valid) {
      this.oEspacioService.newOne(this.oEspacio2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Espacio " + this.oEspacio2Send.id + " creado";
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
      this.oRouter.navigate(['/admin/espacio/plist'])
    })
    this.myModal.show()
  }



}

