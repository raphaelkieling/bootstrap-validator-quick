import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    }
  ]
})
export class FormComponent implements ControlValueAccessor {

  @Input() _value = '';

  @Input() type = 'text';
  @Input() class = '';
  @Input() placeholder = '';
  @Input() id = '';
  @Input() label;
  @Input() help;
  @Input() disabled = false;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.propagateChange(val);
  }

  constructor() { }

  writeValue(value: any): void {
    // tslint:disable-next-line:curly
    if (value !== undefined)
      this.value = value;
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  handleChange(e) {
    this.value = e;
    this.propagateChange(e);
  }

}
