import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { repository } from '../../routes/Repository';
import { arrayMenu, SliderMenu } from './ArrayItemsSliderBar';

@Component({
  selector: 'app-slider-bar',
  templateUrl: './slider-bar.component.html',
  styleUrls: ['./slider-bar.component.scss'],
})
export class SliderBarComponent {
  imgLogo = `https://pondokindahmall.co.id/assets/img/default.png`;
  arrayItems: Array<SliderMenu> = arrayMenu;
  constructor(private menu: MenuController, private router: Router) {}

  openFirst(): void {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd(): void {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  abrirItems(index: number): void {
    this.arrayItems.map((res: SliderMenu) => {
      res.actived = false;
    });
    this.arrayItems[index].actived = true;
  }
  
  irRuta(url: string): void {
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
