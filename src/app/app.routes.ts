import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogpostComponent } from './pages/blog/components/blogpost/blogpost.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogpostComponent },
];
