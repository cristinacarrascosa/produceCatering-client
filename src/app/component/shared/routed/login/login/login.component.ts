import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/shared-interface';
import { CryptoService } from 'src/app/service/crypto.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  strOperation: string = "login"
  formularioLogin: UntypedFormGroup;
  oUserSession: IUser;

  constructor(
    private FormBuilder: UntypedFormBuilder,
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    private oCryptoService: CryptoService,
    public oMetadataService: MetadataService

  ) {
    if (oRoute.snapshot.data['message']) {
      this.oUserSession = this.oRoute.snapshot.data['message'];
      localStorage.setItem("user", JSON.stringify(oRoute.snapshot.data['message']));
      oRouter.navigate(['/home']);
    } else {
      localStorage.clear();
    }

    this.formularioLogin = <UntypedFormGroup>this.FormBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const loginData = { login: this.formularioLogin.get('login')!.value, password: (this.formularioLogin.get('password')!.value) };
    console.log("login:onSubmit: ", loginData);
    this.oSessionService.login(JSON.stringify(loginData)).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(data.toString()));
      if (data != null) {
        this.oRouter.navigate(['/','home']);
      } else {
        localStorage.clear();
      }
    });
    return false;
  }

  loginAdmin() {
    this.formularioLogin.setValue({
      login: "adminin",
      password: "123456789"
    })
  }

  loginUser() {
    this.formularioLogin.setValue({
      login: "usuariojavi",
      password: "123456789"
    })
  }

}
