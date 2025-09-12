import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenceTableComponent } from './evidence-table.component';

describe('EvidenceTableComponent', () => {
  let component: EvidenceTableComponent;
  let fixture: ComponentFixture<EvidenceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvidenceTableComponent]
    });
    fixture = TestBed.createComponent(EvidenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
