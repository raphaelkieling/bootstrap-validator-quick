export class ConfigValidator {
  error = new ErrorConfig();
  validation = new Validation();

}

export class Validation {
  showValidationAfterTouched?= true;
  showValid?= false;
}

export class ErrorConfig {
  showAsterisk?= true;
}
