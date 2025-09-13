import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

type Role = 'user' | 'assistant';
interface Message { id: string; role: Role; content: string; timestamp: string }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit, OnDestroy {
  messages: Message[] = [];
  isTyping = false;
  suggestions = [
    'Summarize this PDF in bullet points',
    'Create a weekly meal plan and shopping list',
    'Turn this paragraph into a friendly email',
    'Explain TypeScript generics with examples'
  ];

  @ViewChild('actionsRef', { static: false }) actionsRef?: ElementRef<HTMLElement>;
  actionsHeight = 0;
  private ro?: ResizeObserver;

  constructor(){
    this.addAssistant("Hey, I'm Nova — your helpful AI assistant. Ask me anything.");
  }

  ngAfterViewInit() {
    if (this.actionsRef) {
      this.actionsHeight = this.actionsRef.nativeElement.offsetHeight;
      this.ro = new ResizeObserver(() => {
        this.actionsHeight = this.actionsRef!.nativeElement.offsetHeight;
      });
      this.ro.observe(this.actionsRef.nativeElement);
    }
    window.addEventListener('resize', this.onWindowResize);
  }

  ngOnDestroy() {
    if (this.ro && this.actionsRef) this.ro.unobserve(this.actionsRef.nativeElement);
    window.removeEventListener('resize', this.onWindowResize);
  }

  private onWindowResize = () => {
    if (this.actionsRef) this.actionsHeight = this.actionsRef.nativeElement.offsetHeight;
  }

  private now(){ return new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}); }

  addAssistant(text: string){ this.messages.push({ id: this.uuid(), role: 'assistant', content: text, timestamp: this.now() }); }

  handleSend(text: string){
    const trimmed = text.trim(); if(!trimmed) return;
    this.messages.push({ id: this.uuid(), role: 'user', content: trimmed, timestamp: this.now() });
    this.isTyping = true;
    setTimeout(()=>{
      this.messages.push({ id: this.uuid(), role: 'assistant', content: this.mockResponse(trimmed), timestamp: this.now() });
      this.isTyping = false;
    }, 700 + Math.random()*800);
  }

  chooseSuggestion(s: string){ this.handleSend(s); }

  private mockResponse(q: string){
    const templates = [
      (      t: any) => `Here’s a concise answer to "${t}":\n\n• Key points listed clearly\n• Practical next steps\n\nWant more detail? Ask me to expand any point.`,
      (      t: any) => `I’ve thought about your question: "${t}". Here’s a structured response with examples and a short summary.`,
      (      t: any) => `Great question! For "${t}", consider these approaches: context, trade-offs, and an actionable plan.`
    ];
    return templates[Math.floor(Math.random()*templates.length)](q);
  }

  private uuid(){ return Math.random().toString(36).slice(2,9); }
}
