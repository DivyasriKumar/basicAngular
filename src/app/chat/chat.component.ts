import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { sender: 'user' | 'bot'; text: string }[] = [];

  handleMessage(query: string) {
    this.messages.push({ sender: 'user', text: query });

    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: `You said: "${query}"` });
    }, 1000);
  }
}
