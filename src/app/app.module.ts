import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// this should only be needed for stackblitz
import 'bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './component/hello/hello.component';
import { ComponentOptionsComponent } from './component/component-options/component-options.component';
// tslint:disable-next-line
import { ComponentOptionsSelectorComponent } from './component/component-options/component-options-selector/component-options-selector.component';
import { ComponentOptionsStyleComponent } from './component/component-options/component-options-style/component-options-style.component';
// tslint:disable-next-line
import { ComponentOptionsTemplateComponent } from './component/component-options/component-options-template/component-options-template.component';
import { BindingsComponent } from './bindings/bindings.component';
import { UsingDirectivesComponent } from './using-directives/using-directives.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { FormsComponent } from './forms/forms.component';
import { ValidationComponent } from './validation/validation.component';
import { ValidationTemplateFormComponent } from './validation/validation-template-form/validation-template-form.component';
import { ValidationReactiveFormComponent } from './validation/validation-reactive-form/validation-reactive-form.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentOptionsComponent,
    ComponentOptionsSelectorComponent,
    ComponentOptionsStyleComponent,
    ComponentOptionsTemplateComponent,
    BindingsComponent,
    UsingDirectivesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    FormsComponent,
    ValidationComponent,
    ValidationTemplateFormComponent,
    ValidationReactiveFormComponent,
    CustomValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
