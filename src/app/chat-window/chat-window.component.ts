import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements AfterViewChecked {
  @Input() messages: { sender: 'user' | 'bot'; text: string }[] = [];
  @ViewChild('scrollMe') private scrollContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.warn('Scroll failed:', err);
    }
  }
}
