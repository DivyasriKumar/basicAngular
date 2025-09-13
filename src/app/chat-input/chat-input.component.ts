import { Component, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  query: string = '';
  @Output() messageSent = new EventEmitter<string>();
  @ViewChild('txt') txt!: ElementRef<HTMLTextAreaElement>;

  submitQuery() {
    const q = this.query.trim();
    if (q) {
      this.messageSent.emit(q);
      this.query = '';
      this.resetHeight();
    }
  }

  adjustHeight() {
    const el = this.txt?.nativeElement;
    if (!el) return;
    el.style.height = 'auto';
    const max = 120; // px
    const next = Math.min(el.scrollHeight, max);
    el.style.height = next + 'px';
    el.style.overflowY = el.scrollHeight > max ? 'auto' : 'hidden';
  }

  resetHeight(){ if(this.txt?.nativeElement){ this.txt.nativeElement.style.height='50px'; }}
}
