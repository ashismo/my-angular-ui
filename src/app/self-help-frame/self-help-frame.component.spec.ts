import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfHelpFrameComponent } from './self-help-frame.component';

describe('SelfHelpFrameComponent', () => {
  let component: SelfHelpFrameComponent;
  let fixture: ComponentFixture<SelfHelpFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfHelpFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfHelpFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
