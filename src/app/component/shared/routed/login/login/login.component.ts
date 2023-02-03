import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/shared-interface';
import { CryptoService } from 'src/app/service/crypto.service';
import { DecodeService } from 'src/app/service/decode.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // strOperation: string = "login"
  // formularioLogin: UntypedFormGroup;
  // oUserSession: IUser;

  oFormularioLogin: FormGroup<IUser>;

  constructor(
    // private FormBuilder: UntypedFormBuilder,
    // private oRoute: ActivatedRoute,
    // private oRouter: Router,
    // private oSessionService: SessionService,
    // private oCryptoService: CryptoService,
    // public oMetadataService: MetadataService

    protected oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oDecodeService: DecodeService

  ) {
    // if (oRoute.snapshot.data['message']) {
    //   this.oUserSession = this.oRoute.snapshot.data['message'];
    //   localStorage.setItem("user", JSON.stringify(oRoute.snapshot.data['message']));
    //   oRouter.navigate(['/home']);
    // } else {
    //   localStorage.clear();
    // }

    // this.formularioLogin = <UntypedFormGroup>this.FormBuilder.group({
    //   login: ['', [Validators.required, Validators.minLength(3)]],
    //   password: ['', [Validators.required, Validators.minLength(3)]]
    // });

    if (this.oSessionService.isSessionActive()) {
      this.oRouter.navigate(['/home']);
    }



    this.oFormularioLogin = <FormGroup>this.oFormBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   const loginData = { login: this.formularioLogin.get('login')!.value, password: (this.formularioLogin.get('password')!.value) };
  //   //console.log("login:onSubmit: ", loginData);
  //   this.oSessionService.login(JSON.stringify(loginData)).subscribe(data => {
  //     localStorage.setItem("user", JSON.stringify(data.toString()));
  //     if (data != null) {
  //       this.oRouter.navigate(['/','home']);
  //     } else {
  //       localStorage.clear();
  //     }
  //   });
  //   return false;
  // }

  // loginAdmin() {
  //   this.formularioLogin.setValue({
  //     login: "admin_admin",
  //     password: "12345678"
  //   })
  // }

  // loginUser() {
  //   this.formularioLogin.setValue({
  //     login: "user_user",
  //     password: "12344321"
  //   })
  // }

  login() {
    this.oSessionService.login(this.oFormularioLogin.get('login')!.value, this.oFormularioLogin.get('password')!.value)
      .subscribe({
        next: (data: string) => {
          localStorage.setItem("token", data);
          this.oSessionService.emit(new EmitEvent(Events.login, data));
          this.oRouter.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status, error.statusText);
        }
      })
  }

  loginAsAdmin() {
    console.log("loginAsAdmin");
    this.oFormularioLogin.controls.login.setValue("admin_admin");
    this.oFormularioLogin.controls.password.setValue("12345678");
  }

}
