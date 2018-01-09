# Boostrap Validator 
> Valid your input bootstrap easy.

[![NPM Version][npm-image]][npm-url]
<!-- [![Build Status][travis-image]][travis-url] -->
[![Downloads Stats][npm-downloads]][npm-url]


This package tries to make it easier to use forms using CDN or bootstrap package. Created directives easy to use.


## Installation

OS X & Linux & Windows:

```sh
npm install bootstrap-validator-quick --save
```

## Example Use

Alguns exemplos interessantes e úteis sobre como seu projeto pode ser utilizado. Adicione blocos de códigos e, se necessário, screenshots.

_Para mais exemplos, consulte a [Wiki][wiki]._ 

### Ts
```
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
```
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

## Configuração para Desenvolvimento

Descreva como instalar todas as dependências para desenvolvimento e como rodar um test-suite automatizado de algum tipo. Se necessário, faça isso para múltiplas plataformas.

```sh
make install
npm test
```

## Histórico de lançamentos

* 0.2.1
    * MUDANÇA: Atualização de docs (código do módulo permanece inalterado)
* 0.2.0
    * MUDANÇA: Remove `setDefaultXYZ()`
    * ADD: Adiciona `init()`
* 0.1.1
    * CONSERTADO: Crash quando chama `baz()` (Obrigado @NomeDoContribuidorGeneroso!)
* 0.1.0
    * O primeiro lançamento adequado
    * MUDANÇA: Renomeia `foo()` para `bar()`
* 0.0.1
    * Trabalho em andamento

## Meta

Seu Nome – [@SeuNome](https://twitter.com/...) – SeuEmail@exemplo.com

Distribuído sob a licença XYZ. Veja `LICENSE` para mais informações.

[https://github.com/yourname/github-link](https://github.com/othonalberto/)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/yourname/yourproject/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/bootstrap-validator-quick
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
