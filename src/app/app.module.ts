import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ComponentOptionsComponent,
    ComponentOptionsSelectorComponent,
    ComponentOptionsStyleComponent,
    ComponentOptionsTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
