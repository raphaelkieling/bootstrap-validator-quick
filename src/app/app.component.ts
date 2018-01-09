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
    select: {
      required: 'Select one, please'
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
