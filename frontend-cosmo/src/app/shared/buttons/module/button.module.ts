import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PrimaryButtonsComponent } from '../components/primary-buttons/primary-buttons.component';
import { SecondaryButtonsComponent } from '../components/secondary-buttons/secondary-buttons.component';
import { LinksButtonsComponent } from '../components/links-buttons/links-buttons.component';

@NgModule({
  declarations: [
    PrimaryButtonsComponent,
    SecondaryButtonsComponent,
    LinksButtonsComponent,
  ],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [
    PrimaryButtonsComponent,
    SecondaryButtonsComponent,
    LinksButtonsComponent,
  ],
})
export class ButtonsModule {}
