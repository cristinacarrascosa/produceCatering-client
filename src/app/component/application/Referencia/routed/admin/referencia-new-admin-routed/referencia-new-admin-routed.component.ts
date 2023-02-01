import { Component, OnInit } from '@angular/core';
import { IReferencia, IReferencia2Form, IReferencia2Send } from '../../../../../../model/referencia-interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ReferenciaService } from 'src/app/service/referencia.service';
import { Location } from '@angular/common';


declare let bootstrap: any;


@Component({
  selector: 'app-referencia-new-admin-routed',
  templateUrl: './referencia-new-admin-routed.component.html',
  styleUrls: ['./referencia-new-admin-routed.component.css']
})
export class ReferenciaNewAdminRoutedComponent implements OnInit{

  //id: number = 0;
  oReferencia: IReferencia = null;
  oReferencia2Form: IReferencia2Form;
  oReferencia2Send: IReferencia2Send;
  oForm: FormGroup<IReferencia2Form>;
  // modal
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
    private oReferenciaService: ReferenciaService

  ) {}

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
    });
  }



  onSubmit() {

    this.oReferencia2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,


    }
    if (this.oForm.valid) {
      this.oReferenciaService.newOne(this.oReferencia2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Referencia " + this.oReferencia2Send.id + " creada";
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
      this.oRouter.navigate(['/admin/referencia/plist'])
    })
    this.myModal.show()
  }

  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findReferencia"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

}
