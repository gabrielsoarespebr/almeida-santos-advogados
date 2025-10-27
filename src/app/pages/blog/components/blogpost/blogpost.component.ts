import { ChatService } from './../../../../services/chat.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { map, of, switchMap } from 'rxjs';
import { BlogService } from '../../../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogPost } from '../../blog.component';
import { ChatComponent } from '../../../../shared/components/chat/chat.component';

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ChatComponent, CommonModule],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css',
})
export class BlogpostComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private chatService: ChatService
  ) {}

  post$ = this.route.paramMap.pipe(
    switchMap((params) => {
      const nav = this.router.getCurrentNavigation();
      const statePost = nav?.extras.state?.['post'];
      if (statePost) return of(statePost);

      return this.blogService
        .getBlogPostList()
        .pipe(
          map((posts: BlogPost[]) =>
            posts.find((p) => p.urlPath === params.get('slug'))
          )
        );
    })
  );

  showChat() {
    this.chatService.showChat();
  }
}
