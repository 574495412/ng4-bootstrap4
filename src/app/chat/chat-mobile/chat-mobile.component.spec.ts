import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMobileComponent } from './chat-mobile.component';

describe('ChatMobileComponent', () => {
  let component: ChatMobileComponent;
  let fixture: ComponentFixture<ChatMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ ChatMobileComponent ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
