import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-warning',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.css',
})
export class WarningComponent {}
