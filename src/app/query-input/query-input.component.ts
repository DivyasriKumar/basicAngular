import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-query-input',
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.css']
})
export class QueryInputComponent {
 query: string = '';
  messages: { sender: 'user' | 'bot'; text: string }[] = [];

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;

  submitQuery() {
    if (!this.query.trim()) return;

    this.messages.push({ sender: 'user', text: this.query });
    const userQuery = this.query;
    this.query = '';
    this.scrollToBottom();

    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: this.generateBotReply(userQuery) });
      this.scrollToBottom();
    }, 1000);
  }

  generateBotReply(query: string): string {
    return `You asked: "${query}". Here's a helpful response!`;
  }

  scrollToBottom(): void {
    setTimeout(() => {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }, 100);
  }
}
