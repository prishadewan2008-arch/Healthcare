import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AiChat } from './components/ai-chat/ai-chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    AiChat
  ],
  templateUrl: './app.html'
})
export class AppComponent {}