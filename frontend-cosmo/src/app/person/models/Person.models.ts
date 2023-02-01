import { FormControl } from '@angular/forms';

export interface IPerson {
  id_person?: string | FormControl;
  full_name: string | FormControl;
  identity: number | FormControl;
  state: boolean | FormControl;
}
export interface PersonName {
  id_person: string;
  name: string;
}
export const DataPerson: Array<PersonName> = [
  {
    id_person: 'adasd-asdasdasd-asd',
    name: 'Jorge',
  },
  {
    id_person: 'wqq-12fas-ew',
    name: 'roberth',
  },
  {
    id_person: '3421-khjioi-fgtyu',
    name: 'Juan',
  },
];
