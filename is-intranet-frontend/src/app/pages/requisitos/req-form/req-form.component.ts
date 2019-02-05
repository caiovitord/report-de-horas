import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DevelopersService } from './../../../shared/services/developers.service';

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
      storypoints:  [null, [Validators.required, Validators.min(0), Validators.max(144)]],
    });
  }


  verifyValidTouched(nomeCampo) {
    const formControl  = this.formulario.get(nomeCampo);
    return formControl.touched && formControl.invalid;
  }

}
