import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPayComponent } from './direct-pay.component';

describe('DirectPayComponent', () => {
  let component: DirectPayComponent;
  let fixture: ComponentFixture<DirectPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
