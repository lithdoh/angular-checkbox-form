import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesNoExtraArrayComponent } from './checkboxes-no-extra-array.component';

describe('CheckboxesNoExtraArrayComponent', () => {
  let component: CheckboxesNoExtraArrayComponent;
  let fixture: ComponentFixture<CheckboxesNoExtraArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxesNoExtraArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxesNoExtraArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
