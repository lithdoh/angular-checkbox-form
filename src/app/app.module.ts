import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxesNoExtraArrayComponent } from './checkboxes-no-extra-array/checkboxes-no-extra-array.component';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { CheckboxesAllCategoriesComponent } from './checkboxes-all-categories/checkboxes-all-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxesComponent,
    CheckboxesNoExtraArrayComponent,
    CheckboxesAllCategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://throbbing-field-240145.us-west-2.aws.cloud.dgraph.io/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
