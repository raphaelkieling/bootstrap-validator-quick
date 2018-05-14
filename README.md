# Boostrap Validator 
> Valid your input bootstrap easy.


This package tries to make it easier to use forms using CDN or bootstrap package. Created directives easy to use.


## Installation

OS X & Linux & Windows:

```sh
npm install bootstrap-validator-quick --save
```

## Example Use

Now existing two directives

### bs-validator
<b>Errors</b>
```javascript
  error = {
    name: {
      maxlength: 'Max length is 10',
      required: 'Message to show in the element error'
    }
  }
```
<b>Config</b>
```typescript
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
	
```
## bs-input
**Label**

```html
		<div class="form-group">
          <input 
          bs-input 
          id="name" 
          [label]="'labelName'"
          [placeholder]="'your name'" 
          formControlName="name" 
          type="text"
          >
        </div>
```
Example component using;

### Ts
```typescript
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ValidatorFn, ValidationErrors } from '@angular/forms/src/directives/validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;

  error = {
    name: {
      maxlength: 'Max length is 10'
    },
    cool: {
      required: 'Field is required',
      email: 'Email not valid'
    },
    select:{
      required:'Select one, please'
    }
  }

  constructor(formBuilder: FormBuilder, public http: Http) {



    this.form = formBuilder.group({
      name: ['', Validators.maxLength(10)],
      cool: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      select: ['', Validators.required]
    });


  }

  submit(e) {
    console.log(e);
  }
}

```
### Html
```html
  <div class="container">
  <br>
  <h1>Template form-control simple bootstrap</h1>
  <br>
  <form [formGroup]="form" (ngSubmit)="submit(form)">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <input 
          bs-input 
          bs-validator 
          id="name" 
          [errors]="error.name" 
          [placeholder]="'your name'" 
          formControlName="name" 
          ngModel
          type="text"
          >
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <input bs-input bs-validator [label]="'Coooool!'" [errors]="error.cool" id="cool" [placeholder]="'cool?'" formControlName="cool" type="text" ngModel>
        </div>
      </div>
    </div>


    <select bs-input bs-validator [label]="'Selecione um cargo'" [errors]="error.select" formControlName="select" id="select">
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>



    <br>
    <button [disabled]="!form.valid" type="submit">Submit</button>

  </form>

  {{form.valid}} {{form.value | json}}
</div>
```

## Configuration?

Simply call the module in App or not;

```typescript
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
```

## Contributing

1. Fork (<https://github.com/raphaelkieling/bootstrap-validator-quick>)
2. Create branch feature (`git checkout -b feature/fooBar`)
3. Commit (`git commit -am 'Add some fooBar'`)
4. Push (`git push origin feature/fooBar`)
5. Create a new pull request

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/bootstrap-validator-quick
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
