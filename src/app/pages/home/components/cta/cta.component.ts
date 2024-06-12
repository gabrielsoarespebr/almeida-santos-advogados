import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {

}
