import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderBarComponent } from './slider-bar/slider-bar.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [NavBarComponent, SliderBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    AutoCompleteModule,
  ],
  exports: [NavBarComponent, SliderBarComponent],
})
export class LayoutsModule {}
