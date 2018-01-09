import { ConfigValidator } from './../domain/configValidator';
import { element } from 'protractor';
import { Directive, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Renderer } from '@angular/core';

@Directive({
  selector: '[BsValidator],[bs-validator]'
})
export class BsValidatorDirective implements AfterViewChecked {


  @Input() errors = {};
  @Input() config: ConfigValidator = new ConfigValidator();

  private label: HTMLElement;

  constructor(
    public el: ElementRef,
    public ngControl: NgControl,
    public render: Renderer
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.initElements();
    this.configLabel();
  }

  initElements(): any {
    this.initLabel();
  }

  private initLabel() {
    const nativeHTML: HTMLElement = <HTMLElement>this.el.nativeElement;
    this.label = <HTMLElement>document.querySelector(`label[for=${nativeHTML.getAttribute('id')}]`);
  }

  ngAfterViewChecked() {
    this.checkError();
    if (this.config.validation.showValid)
      this.checkValid();
  }

  configLabel() {
    this.requiredElement((required) => {
      if (required && this.config.error.showAsterisk) {
        if (this.label) {
          this.label.textContent = this.insertAsteriskInLabel(this.label.textContent);
        }
      }
    });
  }

  private requiredElement(callback) {
    callback(this.ngControl.errors && this.ngControl.errors.required);
  }

  insertAsteriskInLabel(textContent): any {
    return `${textContent} *`;
  }

  checkError() {
    if (!this.canShowErrorNow()) {
      return null;
    }
    const errorsNgModel = this.ngControl.errors;

    this.classNameReplace(' is-invalid', '');
    this.clearErrorElement();

    // tslint:disable-next-line:curly
    if (!errorsNgModel)
      return null;


    this.el.nativeElement.className += ' is-invalid';

    const waitingErrorsNames = Object.keys(this.errors);

    this.forEachCreatingFirstError(waitingErrorsNames, errorsNgModel);
  }

  checkValid() {
    if (!this.canShowValidNow()) {
      return null;
    }
    const validNgModel = this.ngControl.valid;
    this.classNameReplace(' is-valid', '');

    // tslint:disable-next-line:curly
    if (!validNgModel)
      return null;

    this.el.nativeElement.className += ' is-valid';
  }

  private forEachCreatingFirstError(waitingErrorsNames: string[], errorsNgModel: { [key: string]: any; }) {
    let hasError = false;
    waitingErrorsNames.forEach((errorName) => {
      hasError = this.createOneError(hasError, errorsNgModel, errorName);
    });
  }

  private createOneError(hasError: boolean, errorsNgModel: { [key: string]: any }, errorName: string) {
    if (!hasError) {

      if (errorsNgModel[errorName] && this.errors[errorName]) {
        this.createErrorElementWithText(this.errors[errorName]);
        hasError = true;
      }

    }

    return hasError;
  }

  canShowErrorNow(): boolean {
    return (this.config.validation.showValidationAfterTouched) ? this.ngControl.touched : true;
  }

  canShowValidNow(): boolean {
    return (this.config.validation.showValidationAfterTouched) ? this.ngControl.touched : true;
  }

  private clearErrorElement(): any {
    const divQuery = `div[id=${this.el.nativeElement.getAttribute('id')}]`;
    const errorsElements = document.querySelectorAll(divQuery);
    const errorsElementsArray = Array.from(errorsElements);
    errorsElementsArray.forEach((el) => {
      el.remove();
    });
  }

  private classNameReplace(from, to) {
    this.el.nativeElement.className = this.replace(from, to);
  }

  private replace(from, to): any {
    return this.el.nativeElement.className.replace(from, to);
  }

  private createErrorElementWithText(error) {
    const div = document.createElement('div');
    div.className = 'invalid-feedback';
    div.innerHTML = error;
    div.setAttribute('id', this.el.nativeElement.getAttribute('id'));
    this.el.nativeElement.insertAdjacentElement('afterend', div);
  }


}
