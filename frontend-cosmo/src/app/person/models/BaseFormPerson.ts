import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IPerson } from './Person.models';
import { expressionValidation } from 'src/app/shared/validators/expressionValidators';

@Injectable({ providedIn: 'root' })
export class BaseFormPerson {
  constructor(private formB: FormBuilder) {}

  formPerson = this.formB.group<IPerson>({
    id_person: new FormControl<string>(''),
    full_name: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(
        expressionValidation.soloLetrasAcentosEspaciosSinNumeros
      ),
    ]),
    identity: new FormControl<number>(0, [
      Validators.required,
      Validators.pattern(expressionValidation.cedulaTelefono),
    ]),
    state: new FormControl<boolean>(false, [Validators.required]),
  });

  get personValue(): IPerson {
    return this.formPerson.value as IPerson;
  }
}
