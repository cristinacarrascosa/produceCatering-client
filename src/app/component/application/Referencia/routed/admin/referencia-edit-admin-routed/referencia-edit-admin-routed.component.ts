import { Component, OnInit } from '@angular/core';
import { IReferencia, IReferencia2Form, IReferencia2Send } from '../../../../../../model/referencia-interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ReferenciaService } from 'src/app/service/referencia.service';
import { Location } from '@angular/common';


declare let bootstrap: any;


@Component({
  selector: 'app-referencia-edit-admin-routed',
  templateUrl: './referencia-edit-admin-routed.component.html',
  styleUrls: ['./referencia-edit-admin-routed.component.css']
})
export class ReferenciaEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oReferencia: IReferencia;


  oReferencia2Form: IReferencia2Form;
  oReferencia2Send: IReferencia2Send;
  oForm: FormGroup<IReferencia2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    public oMetadataService: MetadataService,
    protected oLocation: Location,
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oReferenciaService: ReferenciaService,
    private oFormBuilder: FormBuilder,

  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oReferenciaService.getOne(this.id).subscribe({
      next: (data: IReferencia) => {
        this.oReferencia = data;
        console.log("datos: "+data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],

        });

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oReferencia2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,


    }
    if (this.oForm.valid) {
      this.oReferenciaService.updateOne(this.oReferencia2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Referencia " + this.id + " actualizado";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/referencia/view', this.id])
    })
    this.myModal.show()
  }


}


