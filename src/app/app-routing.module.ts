import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';
import { ComponentOptionsComponent } from './component/component-options/component-options.component';
import { BindingsComponent } from './bindings/bindings.component';
import { UsingDirectivesComponent } from './using-directives/using-directives.component';
import { FormsComponent } from './forms/forms.component';
import { ValidationComponent } from './validation/validation.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'component-options', component: ComponentOptionsComponent },
  { path: 'bindings', component: BindingsComponent },
  { path: 'using-directives', component: UsingDirectivesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'custom-validators', component: CustomValidatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
