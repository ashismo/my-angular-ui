import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeSelfHelpComponent } from './iframe-self-help.component';

describe('IframeSelfHelpComponent', () => {
  let component: IframeSelfHelpComponent;
  let fixture: ComponentFixture<IframeSelfHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeSelfHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeSelfHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
