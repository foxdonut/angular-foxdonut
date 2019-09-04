import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';
import { ComponentOptionsComponent } from './component/component-options/component-options.component';
import { BindingsComponent } from './bindings/bindings.component';
import { UsingDirectivesComponent } from './using-directives/using-directives.component';
import { FormsComponent } from './forms/forms.component';
import { ValidationComponent } from './validation/validation.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { ServicesExampleComponent } from './services-example/services-example.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { PipeDemoComponent } from './pipes/pipe-demo/pipe-demo.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'component-options', component: ComponentOptionsComponent },
  { path: 'bindings', component: BindingsComponent },
  { path: 'using-directives', component: UsingDirectivesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'custom-validators', component: CustomValidatorsComponent },
  { path: 'services', component: ServicesExampleComponent },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'component-communication', component: ComponentCommunicationComponent },
  { path: 'pipes', component: PipeDemoComponent },
  { path: 'observables', component: ObservablesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
