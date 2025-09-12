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
  adjustHeight(textArea: HTMLTextAreaElement) {
  textArea.style.height = 'auto'; // reset
  const maxHeight = 2 * 24; // assuming line-height ~24px
  const newHeight = Math.min(textArea.scrollHeight, maxHeight);
  textArea.style.height = `${newHeight}px`;
  textArea.style.overflowY = textArea.scrollHeight > maxHeight ? 'scroll' : 'hidden';
}
}
