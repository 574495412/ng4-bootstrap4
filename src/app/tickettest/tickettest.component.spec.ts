import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickettestComponent } from './tickettest.component';

describe('TickettestComponent', () => {
  let component: TickettestComponent;
  let fixture: ComponentFixture<TickettestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickettestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickettestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
