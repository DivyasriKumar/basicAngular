import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {
  @Input() role: 'user' | 'assistant' = 'assistant';
  @Input() content = '';
  @Input() timestamp?: string;
}