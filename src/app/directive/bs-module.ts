import { BsValidatorDirective } from './bs-validator.directive';
import { BsInputDirective } from './bs-input.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BsInputDirective, BsValidatorDirective],
  imports: [CommonModule],
  exports: [BsInputDirective, BsValidatorDirective],
  providers: [],
})
export class BsModule { }
