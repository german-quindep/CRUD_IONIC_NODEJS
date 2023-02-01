import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links-buttons',
  templateUrl: './links-buttons.component.html',
  styleUrls: ['./links-buttons.component.scss'],
})
export class LinksButtonsComponent {
  @Input() label: string | null = null;
  @Input() link: string | null = null;

  constructor(private router: Router) {}

  irRoute(link: string): void {
    console.log(link);
  }
}
