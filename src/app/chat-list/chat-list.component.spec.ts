import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from 'clarity-angular/src';

import { ChatListComponent } from './chat-list.component';

import { ForumsService } from '../forums/forums.service';

describe('ChatListComponent', () => {
  let component: ChatListComponent;
  let fixture: ComponentFixture<ChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatListComponent],
      imports: [
        RouterTestingModule,
        ClarityModule.forRoot(),
        NoopAnimationsModule
      ],
      providers: [ForumsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
