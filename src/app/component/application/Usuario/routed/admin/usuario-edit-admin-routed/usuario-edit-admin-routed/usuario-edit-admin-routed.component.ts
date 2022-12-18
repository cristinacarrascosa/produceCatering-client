import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let bootstrap: any;
@Component({
  selector: 'app-usuario-edit-admin-routed',
  templateUrl: './usuario-edit-admin-routed.component.html',
  styleUrls: ['./usuario-edit-admin-routed.component.css']
})
export class UsuarioEditAdminRoutedComponent implements OnInit {


  id: number = 0;
  oUsuario!: IUsuario | null;
  oUsuario2Form!: IUsuario2Form | null;
  oUsuario2Send: IUsuario2Send | null | undefined;
  oForm!: FormGroup<IUsuario2Form>
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oTipousuarioService: TipousuarioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        console.log("datos: "+data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          apellidos: [data.apellidos, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
          dni: [data.dni, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          login: [data.login, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
          id_tipousuario: [data.tipousuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]

        });

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      apellidos: this.oForm.value.apellidos,
      dni: this.oForm.value.dni,
      email: this.oForm.value.email,
      login: this.oForm.value.login,
      id_tipousuario: this.oForm.value.id_tipousuario

    }
    if (this.oForm.valid) {
      this.oUsuarioService.updateOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Usuario " + this.id + " actualizado";
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
      this.oRouter.navigate(['/admin/developer/view', this.id])
    })
    this.myModal.show()
  }

  openModalFindUsertype(): void {

  }

}
