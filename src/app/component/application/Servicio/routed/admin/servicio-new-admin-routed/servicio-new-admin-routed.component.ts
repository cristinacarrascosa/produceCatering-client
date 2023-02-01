import { Component, OnInit } from '@angular/core';
import { IServicio, IServicio2Form, IServicio2Send } from '../../../../../../model/servicio-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SalonService } from 'src/app/service/salon.service';
import { IUsuario } from 'src/app/model/usuario-interface';
import { ISalon } from '../../../../../../model/salon-interface';


declare let bootstrap: any;

@Component({
  selector: 'app-servicio-new-admin-routed',
  templateUrl: './servicio-new-admin-routed.component.html',
  styleUrls: ['./servicio-new-admin-routed.component.css']
})
export class ServicioNewAdminRoutedComponent implements OnInit {

  oServicio: IServicio = null;
  oServicio2Form: IServicio2Form;
  oServicio2Send: IServicio2Send;
  oForm: FormGroup<IServicio2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreign key
  usuarioDescription: string = "";
  salonDescription: string = "";
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
  ) { }



  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      comensales: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
      fechahora: ["", [Validators.required]],
      id_usuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_salon: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }








  onSubmit() {
    console.log("onSubmit");
    this.oServicio2Send = {
      id: this.oForm.value.id,
      comensales: this.oForm.value.comensales,
      fechahora: this.oForm.value.fechahora,
      usuario: { id: this.oForm.value.id_usuario },
      salon: { id: this.oForm.value.id_salon }

    }
    if (this.oForm.valid) {
      this.oServicioService.newOne(this.oServicio2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Servicio " + this.oServicio2Send.id + " creado";
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
      this.oRouter.navigate(['/admin/servicio/plist'])
    })
    this.myModal.show()
  }

  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeUsuarioModal(id_usuario: number) {
    this.oForm.controls['id_usuario'].setValue(id_usuario);
    this.updateUsuarioDescription(id_usuario);
    this.myModal.hide();
  }

  updateUsuarioDescription(id_usuario: number) {
    this.oUsuarioService.getOne(id_usuario).subscribe({
      next: (data: IUsuario) => {
        this.usuarioDescription = data.nombre + " " + data.apellidos;
      },
      error: (error: any) => {
        this.usuarioDescription = "Usuario no encontrado";
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
      }
    })
  }

  openModalFindSalon(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findSalon"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


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
        this.salonDescription = "Salon no encontrado";
        this.oForm.controls['id_salon'].setErrors({ 'incorrect': true });
      }
    })
  }


}


