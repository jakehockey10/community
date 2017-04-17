import { RouterTestingModule } from '@angular/router/testing';
import { ForumsService } from '../forums.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ThreadsComponent } from './threads.component';

describe('ThreadsComponent', () => {
  let component: ThreadsComponent;
  let fixture: ComponentFixture<ThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [        ThreadsComponent      ],
      providers: [
        ForumsService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
