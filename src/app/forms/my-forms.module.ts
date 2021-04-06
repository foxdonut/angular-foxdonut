import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { FormsComponent } from './forms.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MyNgrxFormComponent } from './my-ngrx-form/my-ngrx-form.component';
import { myNgrxFormFeatureKey, myNgrxFormReducer } from './my-ngrx-form/my-ngrx-form.reducer';
import { MyDynamicReactiveFormComponent } from './my-dynamic-reactive-form/my-dynamic-reactive-form.component';

@NgModule({
  declarations: [
    FormsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    MyNgrxFormComponent,
    MyDynamicReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(myNgrxFormFeatureKey, myNgrxFormReducer),
    NgrxFormsModule,
  ],
  exports: [
    FormsComponent
  ]
})
export class MyFormsModule { }
