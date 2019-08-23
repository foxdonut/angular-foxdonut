import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';
import { ComponentOptionsComponent } from './component/component-options/component-options.component';
import { BindingsComponent } from './bindings/bindings.component';
import { UsingDirectivesComponent } from './using-directives/using-directives.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'component-options', component: ComponentOptionsComponent },
  { path: 'bindings', component: BindingsComponent },
  { path: 'using-directives', component: UsingDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
