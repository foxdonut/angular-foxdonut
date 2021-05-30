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
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { RoutingComponent } from './routing/routing.component';
import { RoutingAboutComponent } from './routing/routing-about/routing-about.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { RoutingUserComponent } from './routing/routing-user/routing-user.component';
import { UserGuardService } from './routing/user-guard.service';
import { UserResolveService } from './routing/user-resolve.service';
import { DynamicDemoComponent } from './dynamic-demo/dynamic-demo.component';
import { DynamicDemoTwoComponent } from './dynamic-demo-two/dynamic-demo-two.component';
import { LoadingStateComponent } from './loading-state/loading-state.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
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
  { path: 'observables', component: ObservablesComponent },
  { path: 'http-requests', component: HttpRequestsComponent },
  { path: 'routing', component: RoutingComponent, children: [
    { path: '', component: RoutingAboutComponent },
    { path: 'users/:id', component: RoutingUserComponent,
      canActivate: [UserGuardService], resolve: { user: UserResolveService } },
    { path: 'users', component: RoutingUsersComponent }
  ] },
  { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule ) },
  { path: 'mod3', loadChildren: () => import('./module3/module3.module').then(m => m.Module3Module) },
  { path: 'car-app', loadChildren: () => import('./car-app/car-app.module').then(m => m.CarAppModule ) },
  { path: 'dynamic-demo', component: DynamicDemoComponent },
  { path: 'dynamic-demo-two', component: DynamicDemoTwoComponent },
  { path: 'loading-state', component: LoadingStateComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
