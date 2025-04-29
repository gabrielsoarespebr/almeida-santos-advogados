import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();

  showChat() {
    this.isVisibleSubject.next(true);
  }

  hideChat() {
    this.isVisibleSubject.next(false);
  }
}
