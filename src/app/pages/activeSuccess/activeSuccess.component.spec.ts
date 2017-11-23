import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSuccessComponent } from './activeSuccess.component';

describe('ActiveSuccessComponent', () => {
  let component: ActiveSuccessComponent;
  let fixture: ComponentFixture<ActiveSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ActiveSuccessComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
