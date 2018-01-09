import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsInputContainerComponent } from './bs-input-container.component';
import { BsInputDirective } from '../../directive/bs-input.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BsInputContainerComponent,
    BsInputDirective
  ],
  exports: [
    BsInputContainerComponent,
    BsInputDirective
  ]
})
export class BsInputContainerModule { }
