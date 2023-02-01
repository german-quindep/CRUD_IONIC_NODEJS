import { Component, OnInit } from '@angular/core';
import { LoginServices } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  constructor(private apiService:LoginServices) { 
    this.apiService.getAuthToken();
  }

  ngOnInit() {}

}
