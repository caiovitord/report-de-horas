import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DevelopersService } from './../../../shared/services/developers.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-req-form',
  templateUrl: './req-form.component.html',
  styleUrls: ['./req-form.component.css']
})
export class ReqFormComponent implements OnInit {

  public formulario: FormGroup;

  areas: any;



  constructor(
    private formBuilder: FormBuilder,
    private devService: DevelopersService
    ) { }

  ngOnInit() {
    this.areas = this.devService.getArea();

    this.formulario = this.formBuilder.group({
      code: [null, [Validators.required, Validators.minLength(5)]],
      title: [null, [Validators.required, Validators.minLength(10)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      area: [null, [Validators.required]],
      storypoints: [null, [Validators.required, Validators.min(0), Validators.max(144)]],
    });


    this.noNegativeValue();
  }
  noNegativeValue() {
    this.formulario.get('storypoints').valueChanges
      .pipe(
        map(valor => {
          if (valor < 0) {
            this.formulario.get('storypoints').setValue(0);
          }
        })).subscribe();
  }


  verifyValidTouched(nomeCampo) {
    const formControl = this.formulario.get(nomeCampo);
    return formControl.touched && formControl.invalid;
  }

}
