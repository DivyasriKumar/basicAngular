import { Component, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements AfterViewChecked {
  @Input() messages: { id?: string; role: 'user' | 'assistant'; content: string; timestamp?: string }[] = [];
  @Input() bottomOffset: number = 0;
  @ViewChild('scrollMe') private scrollContainer!: ElementRef;
  @ViewChild('anchor') private anchor!: ElementRef;

  private prevCount = 0;

  ngAfterViewChecked() {
    // update padding to ensure messages are visible above the input
    try {
      if (this.scrollContainer && this.scrollContainer.nativeElement) {
        const pad = (this.bottomOffset || 0) + 16; // extra breathing room
        this.scrollContainer.nativeElement.style.paddingBottom = pad + 'px';
      }
    } catch (e) {}

    // Only scroll when message count changes to avoid janky behavior
    if (this.messages && this.messages.length !== this.prevCount) {
      this.prevCount = this.messages.length;
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    try {
      // Prefer scrolling the anchor into view for smooth behaviour
      if (this.anchor && this.anchor.nativeElement && 'scrollIntoView' in this.anchor.nativeElement) {
        // slight delay to allow DOM updates
        setTimeout(() => {
          try {
            this.anchor.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
          } catch (e) {
            // fallback
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight - (this.bottomOffset || 0);
          }
        }, 50);
      } else {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight - (this.bottomOffset || 0);
      }
    } catch (err) {
      // ignore errors
    }
  }
}
