import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IEmployee } from './Employee.models';
import { expressionValidation } from 'src/app/shared/validators/expressionValidators';

@Injectable({ providedIn: 'root' })
export class BaseFormEmployee {
  constructor(private formB: FormBuilder) {}

  formEmployee = this.formB.group<IEmployee>({
    id_employee: new FormControl<string>(''),
    deparment: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(
        expressionValidation.soloLetrasAcentosEspaciosSinNumeros
      ),
    ]),
    hours_extra: new FormControl<number>(0, [
      Validators.required,
      Validators.pattern(expressionValidation.soloNumeros),
    ]),
    salary: new FormControl<number>(0, [
      Validators.required,
      Validators.pattern(expressionValidation.soloNumeros),
    ]),
    id_person: new FormControl<string>('', [Validators.required]),
  });

  get employeValue(): IEmployee {
    return this.formEmployee.value as IEmployee;
  }
}
