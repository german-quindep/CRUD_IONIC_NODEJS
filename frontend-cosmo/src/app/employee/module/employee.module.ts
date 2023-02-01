import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
/* ROUTING */
import { EmployeeRoutingModule } from './employee-routing.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { ButtonsModule } from 'src/app/shared/buttons/module/button.module';
/* COMPONENTS */
import { IndexComponent } from '../components/index.component';
import { FormComponent } from '../components/form/form.component';
/* CLASS */
import { BaseFormEmployee } from '../models/BaseFormEmployee';
@NgModule({
  declarations: [IndexComponent, FormComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    IonicModule.forRoot(),
  ],
  providers: [BaseFormEmployee],
})
export class EmployeeModule {}
