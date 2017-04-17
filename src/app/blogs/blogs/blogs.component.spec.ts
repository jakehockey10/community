import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsComponent } from './blogs.component';

import { BlogsService } from '../blogs.service';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsComponent],
      providers: [
        BlogsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
