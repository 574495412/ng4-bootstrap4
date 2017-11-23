import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSeatsComponent } from './uploadseats.component';

describe('TickettestComponent', () => {
  let component: UploadSeatsComponent;
  let fixture: ComponentFixture<UploadSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
