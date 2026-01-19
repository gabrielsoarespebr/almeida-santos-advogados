import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { BannerComponent } from './components/banner/banner.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CompetitiveEdgesComponent } from './components/competitive-edges/competitive-edges.component';
import { LegalServicesComponent } from './components/legal-services/legal-services.component';
import { CtaComponent } from './components/cta/cta.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { WarningComponent } from './components/warning/warning.component';
import { ChatComponent } from '../../shared/components/chat/chat.component';
import { ChatService } from '../../services/chat.service';
import { CourtDecisionsComponent } from './components/court-decisions/court-decisions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    DividerComponent,
    BannerComponent,
    TestimonialsComponent,
    CompetitiveEdgesComponent,
    LegalServicesComponent,
    CtaComponent,
    FaqComponent,
    FooterComponent,
    NewsComponent,
    WarningComponent,
    ChatComponent,
    CourtDecisionsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private chatService: ChatService) {}

  showChat() {
    this.chatService.showChat();
  }
}
