import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
/* MODULE */
import { PersonRoutingModule } from './person-routing.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { ButtonsModule } from 'src/app/shared/buttons/module/button.module';
/* COMPONENTS */
import { IndexComponent } from '../components/index.component';
import { FormComponent } from '../components/form/form.component';
/* CLASS */
import { BaseFormPerson } from '../models/BaseFormPerson';


@NgModule({
  declarations: [IndexComponent, FormComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    ButtonsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [BaseFormPerson],
})
export class PersonModule {}
