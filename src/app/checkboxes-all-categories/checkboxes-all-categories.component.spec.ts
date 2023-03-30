import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesAllCategoriesComponent } from './checkboxes-all-categories.component';

describe('CheckboxesAllCategoriesComponent', () => {
  let component: CheckboxesAllCategoriesComponent;
  let fixture: ComponentFixture<CheckboxesAllCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxesAllCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxesAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
