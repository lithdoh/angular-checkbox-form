import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxesNoExtraArrayComponent } from './checkboxes-no-extra-array/checkboxes-no-extra-array.component';



@NgModule({
  declarations: [
    AppComponent,
    CheckboxesComponent,
    CheckboxesNoExtraArrayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
