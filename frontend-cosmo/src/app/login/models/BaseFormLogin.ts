import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { expressionValidation } from 'src/app/shared/validators/expressionValidators';
import { ILogin } from './ILogin.models';
@Injectable({ providedIn: 'root' })
export class BaseFormLogin {
  constructor(private formB: FormBuilder) {}

  formLogin = this.formB.group<ILogin>({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(
        expressionValidation.soloLetrasAcentosEspaciosSinNumeros
      ),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(expressionValidation.contrasena),
    ]),
  });
  /* FORM VALUES ILOGIN */
  get formValues(): ILogin {
    return this.formLogin.value as ILogin;
  }
}
