import { Component } from '@angular/core';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CtaButtonComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {}
