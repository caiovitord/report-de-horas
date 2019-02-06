import { ServerResponseService } from './../../../shared/services/server-response.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { RequisitesService } from './../../../shared/services/requisites.service';
import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';
import { ReqFormComponent } from './../req-form/req-form.component';
import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';



@Component({
  selector: 'app-req-edit',
  templateUrl: './req-edit.component.html',
  styleUrls: ['./req-edit.component.css']
})
export class ReqEditComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];

  id: number;

  requisite$;

  @ViewChild('serverReponseComponent') serverReponseComponent: ServerResponseComponent;
  @ViewChild('formComponent') formComponent: ReqFormComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageHeaderService: PageHeaderService,
    private requisiteService: RequisitesService,
    private serverResponseService: ServerResponseService

  ) { }

  ngOnInit() {

    this.pageHeaderService.title = 'Editar requisito';
    this.pageHeaderService.upperLevel = 'Requisitos';
    this.pageHeaderService.description = '';


    this.subscription.push(this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.subscription.push(this.requisiteService.getRequisiteById(this.id).pipe(
          map(dado => this.formComponent.formulario.patchValue(dado)) // Preenche o formulário com os dados
        ).subscribe());
      }
    ));


    this.subscription.push( this.serverResponseService.responseEventEmitter
      .pipe(
        map(res => this.processResponse(res))
      )
      .subscribe());
  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }


  onTrySubmitEdit() {
    const formGroup = this.formComponent.formulario;
    if (formGroup.valid) {
      this.onEdit(formGroup.value);
    } else {
      Object.keys(formGroup.controls).forEach(
        campo => formGroup.get(campo).markAsTouched()
      );
    }
  }


  processResponse(res: any) {
    if (res.status && res.status === 200) {
      // this.formComponent.formulario.reset();
      this.serverReponseComponent.reset();
    }
  }

  onEdit(values: any) {
    values['id'] = this.id;
    this.requisiteService.editRequisite(values);
  }


}
