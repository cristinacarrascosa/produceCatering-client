import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISalon, ISalon2Form, ISalon2Send } from 'src/app/model/salon-interface';
import { MetadataService } from 'src/app/service/metadata.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonService } from 'src/app/service/salon.service';
import { EspacioService } from 'src/app/service/espacio.service';
import { IEspacio } from '../../../../../../model/espacio-interface';

declare let bootstrap: any;
@Component({
  selector: 'app-salon-edit-admin-routed',
  templateUrl: './salon-edit-admin-routed.component.html',
  styleUrls: ['./salon-edit-admin-routed.component.css']
})
export class SalonEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oSalon: ISalon;

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
    public oMetadataService: MetadataService,
    protected oLocation: Location,
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oSalonService: SalonService,
    private oFormBuilder: FormBuilder,
    private oEspacioService: EspacioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oSalonService.getOne(this.id).subscribe({
      next: (data: ISalon) => {
        this.oSalon = data;
        console.log("datos: "+data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
          id_espacio: [data.espacio.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]

        });
        this.updateEspacioDescription(this.oSalon.espacio.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oSalon2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      espacio: { id: this.oForm.value.id_espacio }

    }
    if (this.oForm.valid) {
      this.oSalonService.updateOne(this.oSalon2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Salon " + this.id + " actualizado";
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
      this.oRouter.navigate(['/admin/salon/view', this.id])
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
        this.oForm.controls['id_espacio'].setErrors({'incorrect': true});
      }
    })
  }

  openModalFindUsertype(): void {

  }

}

