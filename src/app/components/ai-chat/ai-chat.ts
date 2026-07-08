import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AiService } from '../../services/ai.service';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css'
})
export class AiChat {

  isOpen = false;

  question = "";

  answer = "";

  loading = false;

  constructor(private ai: AiService) {}

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  askAI() {

    if (!this.question.trim()) return;

    this.loading = true;

    this.ai.ask(this.question).subscribe({

      next: (res: any) => {

      console.log("FULL RESPONSE:", res);

      this.answer = res.reply;

      this.loading = false;

    },

      error: () => {

        this.answer = "Unable to contact AI.";

        this.loading = false;

      }

    });

  }

}