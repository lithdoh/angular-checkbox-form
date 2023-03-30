import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkboxes-no-extra-array',
  templateUrl: './checkboxes-no-extra-array.component.html',
  styleUrls: ['./checkboxes-no-extra-array.component.css']
})
export class CheckboxesNoExtraArrayComponent {

  allFilters: string[] = ["Pepperoni", "Extra Cheese", "Mushroom"];
  checkedFilters: string[] = [];

  nnfb = new FormBuilder().nonNullable;

  form = this.nnfb.group({
    brands: this.nnfb.control([])
  });

  brands = this.form.get('brands') as FormControl;

  addCheckboxNameToFormControl(name: string): void {
    const index = this.brands.value.indexOf(name);

    if (index > -1) {
      this.brands.setValue([
        ...this.brands.value.slice(0, index),
        ...this.brands.value.slice(index + 1),
      ]); 
    } else {
      this.brands.setValue([...this.brands.value, name]);
    }
  };

  allChecked(): boolean {
    return this.brands.value.length === this.allFilters.length;
  }

  someChecked(): boolean {
    return (this.brands.value.length > 0) && (this.brands.value.length < this.allFilters.length)
  }

  setAll() {
    // If (some, but not all) OR none of the checkboxes are checked when All is clicked, set the value to all.
    if ((
      (this.brands.value.length > 0) && 
      (this.brands.value.length < this.allFilters.length)) || 
      (this.brands.value.length === 0)) {
      this.brands.setValue(this.allFilters);
    } else {
      this.brands.setValue([]);
    }
  }

  brandsValueContains(checkboxName: string): boolean {
    return this.brands.value.includes(checkboxName);
  }

  log(x: any) {
    console.log('x: ', x);
  }
}
