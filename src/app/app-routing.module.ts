import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './component/hello/hello.component';
import { ComponentOptionsComponent } from './component/component-options/component-options.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'component-options', component: ComponentOptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
