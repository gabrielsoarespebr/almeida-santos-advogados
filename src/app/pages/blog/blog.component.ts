import { ChatService } from './../../services/chat.service';
import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { Observable } from 'rxjs';
import { BannerComponent } from '../blog/components/banner/banner.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { DividerComponent } from '../../shared/components/divider/divider.component';
import { ChatComponent } from '../../shared/components/chat/chat.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    DividerComponent,
    ChatComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogPostList$: Observable<BlogPost[]> = this.blogService.getBlogPostList();

  constructor(
    private blogService: BlogService,
    private chatService: ChatService
  ) {}

  showChat() {
    this.chatService.showChat();
  }
}

export type BlogPost = {
  title: string;
  urlPath: string;
  imgUrl: string;
  textPreview: string;
  content: string;
  date: string;
  author: string;
  tags: string;
  visible: string;
};
