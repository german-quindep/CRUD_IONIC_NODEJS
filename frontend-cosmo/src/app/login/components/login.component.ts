import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { repository } from 'src/app/shared/routes/Repository';
import { urlFrontend } from 'src/app/shared/routes/RoutesFrontend';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { ILogin } from '../models/ILogin.models';
import { LoginServices } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  imgLogo = `${repository.urlRepository}`;
  visibility: boolean;
  errorCheck: boolean = false;
  errorMsg: string = '';
  dateyear = new Date().getFullYear();
  constructor(
    public formB: BaseFormLogin,
    private router: Router,
    private apiServi: LoginServices
  ) {}

  iniciarSesion(form: ILogin): void {
    this.apiServi.postAuthLogin(form).subscribe(
      (res) => {
        this.apiServi.setAuthToken(res.data);
        this.router.navigateByUrl(
          `${urlFrontend.system.module}/${urlFrontend.system.systemIndex}`
        );
      },
      (err) => {
        this.errorCheck = true;
        this.errorMsg = err.error.errors;
      }
    );
  }

  visiblityPassword() {
    this.visibility = !this.visibility;
  }
}
