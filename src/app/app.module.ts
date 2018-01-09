import { FormBoostrapModule } from './components/form/form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { BsValidatorDirective } from './directive/bs-validator.directive';
import { BsInputDirective } from './directive/bs-input.directive';
import { BsInputContainerModule } from './components/bs-input-container/bs-input-container.module';
import { BsModule } from './directive/bs-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
