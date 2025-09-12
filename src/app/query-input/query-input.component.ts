import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-query-input',
  templateUrl: './query-input.component.html',
  styleUrls: ['./query-input.component.css']
})
export class QueryInputComponent {
  query: string = '';

  submitQuery() {
    if (this.query.trim()) {
      console.log('Query submitted:', this.query);
      // TODO: Call service to process query and fetch evidence
    }
  }
}
