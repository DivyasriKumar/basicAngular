import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evidenceList = [
    {
      source: 'GitHub',
      details: 'PR #456 merged without approval',
      timestamp: '2025-09-12 10:45 AM'
    },
    {
      source: 'Slack',
      details: 'Conversation about policy exception',
      timestamp: '2025-09-11 3:20 PM'
    }
  ];

  handleNewQuery(query: string) {
    // TODO: Fetch evidence based on query
    console.log('Handling query:', query);
  }
}
