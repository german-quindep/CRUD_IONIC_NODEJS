import { Component } from '@angular/core';
import { arraySistem, SystemCosmo } from './ArrayItems';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  arraySistemSearch = arraySistem;
  text: any;
  results: string[];

  constructor(private router: Router) {}

  search(event) {
    const results: string[] = [];
    const resultsItems = this.arraySistemSearch.filter(
      (res: SystemCosmo) =>
        res.name.toLowerCase().indexOf(event.query.toLowerCase()) !== -1
    ); //SI ENCUENTRA BUSCO
    resultsItems.map((res: SystemCosmo) => {
      results.push(res.name);
    }); //ASIGNO AL ARRAY EL NOMBRE DELO QUE SE ENCONTRO
    this.results = results;
  }

  buscarElemento(): void {
    const data = this.arraySistemSearch.filter(
      (res: SystemCosmo) => res.name === this.text
    );
    this.router.navigateByUrl(data[0].link);
  }
}
