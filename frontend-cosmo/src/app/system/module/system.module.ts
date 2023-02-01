import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from '../components/index.component';
import { IonicModule } from '@ionic/angular';
import { SystemRoutingModule } from './system-routing.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    LayoutsModule,
    IonicModule.forRoot(),
  ],
})
export class SystemModule {}
