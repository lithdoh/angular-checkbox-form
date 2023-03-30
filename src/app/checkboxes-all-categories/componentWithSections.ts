// @Input() set data(data: Stems[]) {
//     this.stems = data;
//     const sections = this.#sections.map<FormSection>((s) => ({
//       name: s,
//       checkboxNames: this.#dataService.getUniqueValues(data, s),
//     }));
//     sections.forEach(({name, checkboxNames}) => {
//       this.categoriesObj[name].filters = checkboxNames;
//     })  
//     console.log('categoriesObj: ', this.categoriesObj);
//     console.log('sections: ', sections);
//     // this.form = this.#formService.createForm(sections);
//   }

//   nnfb = new FormBuilder().nonNullable;

//   form = this.nnfb.group({
//     brands: this.nnfb.control([]),
//     steererDiameter: this.nnfb.control([]),
//     rise: this.nnfb.control([]),
//     material: this.nnfb.control([]),
//     length: this.nnfb.control([]),
//     color: this.nnfb.control([]),
//     clampDiameter: this.nnfb.control([])
//   });

//   // brands = this.form.get('brands') as FormControl;

//   addCheckboxNameToFormControl(section: string, name: (string | number)): void {
//     const formSection = this.form.get(section) as FormControl;
//     const index = formSection.value.indexOf(name);


//     // Alternate way, something like:
//     // if(this.brands.value.includes(name)) {
//     //   this.brands.setValue(this.brands.value.splice(this.brands.value.indexOf(name, 1)));
//     // } else {
//     //   this.brands.setValue(this.brands.value.push(name));
//     // }

//     if (index > -1) {
//       formSection.setValue([
//         ...formSection.value.slice(0, index),
//         ...formSection.value.slice(index + 1),
//       ]);
//     } else {
//       formSection.setValue([...formSection.value, name]);
//     }
//   };

//   allChecked(section: string): boolean {
//     const formSection = this.form.get(section) as FormControl;
//     return formSection.value.length === this.allBrands.length;
//   }

//   someChecked(section: string): boolean {
//     const formSection = this.form.get(section) as FormControl;
//     return (formSection.value.length > 0) && (formSection.value.length < this.allBrands.length)
//   }

//   setAll(section: string) {
//     const formSection = this.form.get(section) as FormControl;
//     // If (some, but not all) OR none of the checkboxes are checked when All is clicked, set the value to all.
//     if ((
//       (formSection.value.length > 0) &&
//       (formSection.value.length < this.allBrands.length)) ||
//       (formSection.value.length === 0)) {
//       formSection.setValue(this.allBrands);
//     } else {
//       formSection.setValue([]);
//     }
//   }

//   brandsValueContains(section: string, checkboxName: (string | number)): boolean {
//     const formSection = this.form.get(section) as FormControl;
//     return formSection.value.includes(checkboxName);
//   }