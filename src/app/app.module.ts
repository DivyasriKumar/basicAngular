import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileExportComponent } from './file-export/file-export.component';
import { EvidenceTableComponent } from './evidence-table/evidence-table.component';
import { QueryInputComponent } from './query-input/query-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FileExportComponent,
    EvidenceTableComponent,
    QueryInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
