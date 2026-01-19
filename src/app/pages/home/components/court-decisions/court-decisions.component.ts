import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-court-decisions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './court-decisions.component.html',
  styleUrl: './court-decisions.component.css',
})
export class CourtDecisionsComponent {
  isOpen = false;
  currentImage = '';

  courtDecisions = [
    'assets/images/courtDecision4.webp',
    'assets/images/courtDecision2.webp',
    'assets/images/courtDecision1.webp',
    'assets/images/courtDecision3.webp',
  ];

  open(src: string) {
    this.currentImage = src;
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    this.currentImage = '';
    document.body.style.overflow = '';
  }
}
