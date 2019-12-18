import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { ServicesExampleComponent } from './services-example/services-example.component';
import { UsernameFormComponent } from './services-example/username-form/username-form.component';
import { UsernameLogComponent } from './services-example/username-log/username-log.component';
import { UsernameService } from './services/username.service';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { BasicStyleDirective } from './directives/basic-style.directive';
import { RendererStyleDirective } from './directives/renderer-style.directive';
import { BindingStyleDirective } from './directives/binding-style.directive';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { UserComponent } from './component-communication/user/user.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { PipeDemoComponent } from './pipes/pipe-demo/pipe-demo.component';
import { ObservablesComponent } from './observables/observables.component';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { LoggingInterceptorService } from './http-requests/logging-interceptor.service';
import { RoutingComponent } from './routing/routing.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { RoutingUserComponent } from './routing/routing-user/routing-user.component';
import { RoutingAboutComponent } from './routing/routing-about/routing-about.component';
import { UserGuardService } from './routing/user-guard.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { CounterComponent } from './counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';

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
    CustomValidatorsComponent,
    ServicesExampleComponent,
    UsernameFormComponent,
    UsernameLogComponent,
    CustomDirectivesComponent,
    BasicStyleDirective,
    RendererStyleDirective,
    BindingStyleDirective,
    ComponentCommunicationComponent,
    UserComponent,
    PhoneNumberPipe,
    PipeDemoComponent,
    ObservablesComponent,
    HttpRequestsComponent,
    RoutingComponent,
    RoutingUsersComponent,
    RoutingUserComponent,
    RoutingAboutComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [
    UsernameService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
