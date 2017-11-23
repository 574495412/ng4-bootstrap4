import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFreeComponent } from './invoice-free.component';

describe('InvoiceFreeComponent', () => {
  let component: InvoiceFreeComponent;
  let fixture: ComponentFixture<InvoiceFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
