import { Component, OnInit } from '@angular/core';
import { BaseFormEmployee } from '../../models/BaseFormEmployee';
import { IEmployee } from '../../models/Employee.models';
import { DataPerson, PersonName } from 'src/app/person/models/Person.models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  errorCheck: boolean = false;
  errorMsg: string = '';
  text: string;
  results: any[] = [];
  mylookupservice = DataPerson;
  constructor(public formB: BaseFormEmployee) {}

  ngOnInit() {}

  saveData(form: IEmployee) {}

  search(event) {
    const query: string = event.target.value;
    this.results = [];
    if (query.length < 0 || query == '') return (this.results = []);
    const resultsItems = this.mylookupservice.filter(
      (res: PersonName) =>
        res.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    ); //SI ENCUENTRA BUSCO
    resultsItems.map((res: PersonName) => {
      this.results.push({ id_person: res.id_person, name: res.name });
    }); //ASIGNO AL ARRAY EL NOMBRE DELO QUE SE ENCONTRO
  }

  insertInput({ id_person, name }: PersonName) {
    this.text = name;
    this.formB.formEmployee.patchValue({ id_person });
    this.results = [];
  }
}
