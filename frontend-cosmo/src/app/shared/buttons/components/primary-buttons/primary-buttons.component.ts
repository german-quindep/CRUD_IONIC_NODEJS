import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-buttons',
  templateUrl: './primary-buttons.component.html',
  styleUrls: ['./primary-buttons.component.scss'],
})
export class PrimaryButtonsComponent {
  @Input() formB: any | null = null;
  @Input() label: string | null = null;
  constructor() {}
}
