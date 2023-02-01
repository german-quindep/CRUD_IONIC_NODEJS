import { FormControl } from '@angular/forms';

export interface IEmployee {
  id_employee?: string | FormControl;
  salary: number | FormControl;
  hours_extra: number | FormControl;
  deparment: string | FormControl;
  id_person: string | FormControl;
}
