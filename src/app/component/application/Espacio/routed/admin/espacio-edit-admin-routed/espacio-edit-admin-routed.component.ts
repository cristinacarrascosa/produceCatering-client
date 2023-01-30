import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEspacio, IEspacio2Form, IEspacio2Send } from 'src/app/model/espacio-interface';
import { EspacioService } from 'src/app/service/espacio.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { Location } from '@angular/common';


declare let bootstrap: any;
@Component({
  selector: 'app-espacio-edit-admin-routed',
  templateUrl: './espacio-edit-admin-routed.component.html',
  styleUrls: ['./espacio-edit-admin-routed.component.css']
})
export class EspacioEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oEspacio: IEspacio;

  oEspacio2Form: IEspacio2Form;
  oEspacio2Send: IEspacio2Send;
  oForm: FormGroup<IEspacio2Form>;

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    public oMetadataService: MetadataService,
    protected oLocation: Location,
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oEspacioService: EspacioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oEspacioService.getOne(this.id).subscribe({
      next: (data: IEspacio) => {
        this.oEspacio = data;
        console.log("datos: "+data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
          direccion: [data.direccion, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
          telefono: [data.telefono, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
        });

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oEspacio2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      direccion: this.oForm.value.direccion,
      telefono: this.oForm.value.telefono,

    }
    if (this.oForm.valid) {
      this.oEspacioService.updateOne(this.oEspacio2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Espacio " + this.id + " actualizado";
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
      this.oRouter.navigate(['/admin/espacio/view', this.id])
    })
    this.myModal.show()
  }





}


