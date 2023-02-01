import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormLogin } from '../models/BaseFormLogin';
import { ButtonsModule } from 'src/app/shared/buttons/module/button.module';
import { PasswordModule } from 'primeng/password';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule,
    PasswordModule,
    LoginRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [BaseFormLogin],
})
export class LoginModule {}
