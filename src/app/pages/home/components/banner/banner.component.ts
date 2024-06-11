import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {}
