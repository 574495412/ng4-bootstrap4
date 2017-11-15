import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishActivitiesComponent} from './publishactivities.component';

describe('TickettestComponent', () => {
  let component: PublishActivitiesComponent;
  let fixture: ComponentFixture<PublishActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
