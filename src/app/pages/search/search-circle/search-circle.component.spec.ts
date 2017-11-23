import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCircleComponent } from './search-circle.component';

describe('SearchCircleComponent', () => {
  let component: SearchCircleComponent;
  let fixture: ComponentFixture<SearchCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
