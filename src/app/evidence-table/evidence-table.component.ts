import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evidence-table',
  templateUrl: './evidence-table.component.html',
  styleUrls: ['./evidence-table.component.css']
})
export class EvidenceTableComponent {
  @Input() evidenceList: Array<{
    source: string;
    details: string;
    timestamp: string;
  }> = [];

  // You can add sorting or filtering logic here later
}
