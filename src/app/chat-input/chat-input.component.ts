import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  query: string = '';
  @Output() messageSent = new EventEmitter<string>();

  submitQuery() {
    if (this.query.trim()) {
      this.messageSent.emit(this.query);
      this.query = '';
    }
  }
}
