import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePostFormComponent } from './reactive-post-form.component';

describe('ReactivePostFormComponent', () => {
  let component: ReactivePostFormComponent;
  let fixture: ComponentFixture<ReactivePostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivePostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
