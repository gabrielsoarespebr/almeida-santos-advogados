import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  backgroundColorOn: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollRef =
      document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollRef > 50) {
      this.backgroundColorOn = true;
    } else {
      this.backgroundColorOn = false;
    }
  }
}
