import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDatailsComponent } from './ticketdatails.component';

describe('TickettestComponent', () => {
  let component: TicketDatailsComponent;
  let fixture: ComponentFixture<TicketDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
