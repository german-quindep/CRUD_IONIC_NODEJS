import { Component, OnInit } from '@angular/core';
import { BaseFormPerson } from '../../models/BaseFormPerson';
import { IPerson } from '../../models/Person.models';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  errorCheck: boolean = false;
  errorMsg: string = '';
  constructor(public formB: BaseFormPerson, private apiServi: PersonService) {}

  ngOnInit() {}

  saveData(form: IPerson) {
    this.apiServi.postPerson(form).subscribe(
      (res) => {
        console.log(res);
        this.getStatusSet();
      },
      (err) => {
        console.log(err);
        this.errorCheck = true;
        this.errorMsg = err.error.errors;
      }
    );
  }

  getStatusSet() {
    setTimeout(() => {
      this.errorCheck = true;
      this.errorMsg = 'Se registro con exito';
    }, 3000);
    this.errorCheck = false;
  }
}
