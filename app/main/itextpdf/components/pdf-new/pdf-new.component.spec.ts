import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfNewComponent } from './pdf-new.component';

describe('PdfNewComponent', () => {
  let component: PdfNewComponent;
  let fixture: ComponentFixture<PdfNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
