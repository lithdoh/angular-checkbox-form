import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent {
  allFilters: string[] = ["Pepperoni", "Extra Cheese", "Mushroom"];
  checkedFilters: string[] = [];

  nnfb = new FormBuilder().nonNullable;

  form = this.nnfb.group({
    brands: this.nnfb.control([])
  });

  brands = this.form.get('brands') as FormControl;
  // brandValue = this.form.controls.brands.value as String[];

  // addName(checked: boolean, name: string): void {
  //   if (checked) {
  //     this.checkedFilters.push(name);
  //   } else {
  //     this.checkedFilters.slice(0, this.emptyname);
  //   }
  //   console.log('checkedFilters: ', this.checkedFilters);
  // };
  addCheckboxNameToCheckedFilters(name: string): void {
    const index = this.checkedFilters.indexOf(name);

    if (index > -1) {
      this.checkedFilters = [
        ...this.checkedFilters.slice(0, index),
        ...this.checkedFilters.slice(index + 1),
      ];
      
    } else {
      this.checkedFilters = [...this.checkedFilters, name];
    }
    this.brands.setValue(this.checkedFilters);
    console.log('checkedFilters: ', this.checkedFilters);
    console.log('formcontrols: ', this.form.controls.brands.value);
  };

  allChecked(): boolean {
    return this.form.controls.brands.value.length === this.allFilters.length;
  }

  someChecked(): boolean {
    return (this.form.controls.brands.value.length > 0) && (this.form.controls.brands.value.length < this.allFilters.length)
  }

  setAll() {
    if (((this.form.controls.brands.value.length > 0) && (this.form.controls.brands.value.length < this.allFilters.length)) || (this.form.controls.brands.value.length === 0)) {
      this.brands.setValue(this.allFilters);
      this.checkedFilters = this.allFilters;
    } else {
      this.brands.setValue([]);
      this.checkedFilters = [];
    }
    console.log('this.brands.value: ', this.brands.value);
  }

  brandsValueContains(x: string): boolean {
    return this.brands.value.includes(x);
  }

  log(x: any) {
    console.log('x: ', x);
  }
}

// - set all by setting the value of the form to all the checkbox names
// - set none by setting the value of form to an empty array
// - check if all are checked by checking it the length of form value is equal the length of an array of all the checkbox names
// - check if none are checked by checking it the length of form value is zero
// - check if some are checked by checking if the length form value is neither zero or the length of the array of all checkbox names
// - You can use array.prototype.includes to check if the array contains the filter name and if it does check the checkbox