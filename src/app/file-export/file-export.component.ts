import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-export',
  templateUrl: './file-export.component.html',
  styleUrls: ['./file-export.component.css']
})
export class FileExportComponent {
  @Input() evidenceList: any[] = [];

  export(format: string) {
    console.log(`Exporting as ${format}`, this.evidenceList);
    // TODO: Implement actual export logic (CSV/XLS)
  }
}
