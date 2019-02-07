import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RequisitesService } from './../../../shared/services/requisites.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sp-form',
  templateUrl: './sp-form.component.html',
  styleUrls: ['./sp-form.component.css']
})
export class SpFormComponent implements OnInit, OnDestroy {

  requisites: Observable<any>;

  public formulario: FormGroup;
  subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private requisitesService: RequisitesService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      status: [null, []],
      number: [null, [Validators.required, Validators.min(1)]],
      requisites: [null, [Validators.required]],
    });



    this.subscription = this.requisitesService.getAllRequisites()
      .pipe(
        map(reqs => this.postProcessRequisites(reqs))
      ).subscribe();

  }
  postProcessRequisites(reqs) {
      reqs.forEach(reqElement => {
        reqElement['title_and_code'] = reqElement['title'] + ' #Código: ' + reqElement['code'];
      });
      this.requisites = reqs;
  }

  verifyValidTouched(nomeCampo) {
    const formControl = this.formulario.get(nomeCampo);
    return formControl.touched && formControl.invalid;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
