import { NgControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[BsInput],[bs-input]'
})
export class BsInputDirective {



  constructor(
    private el: ElementRef,
    private ngControl: NgControl
  ) {
    this.setClass();
  }

  @Input() set label(value) {
    this.insertLabelBeforeThisElement(value);
  }

  private setClass() {
    this.el.nativeElement.className = 'form-control';
  }

  insertLabelBeforeThisElement(value) {
    const label = this.createLabel(value);
    this.el.nativeElement.insertAdjacentElement('beforebegin', label);
  }

  private createLabel(value) {
    const label = document.createElement('label');
    label.setAttribute('for', this.el.nativeElement.getAttribute('id'));
    label.textContent = value;
    return label;
  }
}
