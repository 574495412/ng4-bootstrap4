import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFriendComponent } from './chat-friend.component';

describe('ChatFriendComponent', () => {
  let component: ChatFriendComponent;
  let fixture: ComponentFixture<ChatFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
