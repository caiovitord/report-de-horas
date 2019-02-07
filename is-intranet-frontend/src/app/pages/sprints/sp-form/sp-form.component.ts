import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RequisitesService } from './../../../shared/services/requisites.service';

@Component({
  selector: 'app-sp-form',
  templateUrl: './sp-form.component.html',
  styleUrls: ['./sp-form.component.css']
})
export class SpFormComponent implements OnInit {

  requisites$: Observable<any>;

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private requisitesService: RequisitesService
  ) { }

  ngOnInit() {
    this.requisites$ = this.requisitesService.getAllRequisites();

    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      number: [null, [Validators.required, Validators.min(1)]],
      requisites: [null, [Validators.required]],
    });
  }

  verifyValidTouched(nomeCampo) {
    const formControl = this.formulario.get(nomeCampo);
    return formControl.touched && formControl.invalid;
  }

}
