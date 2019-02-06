import { Subscription } from 'rxjs';
import { ServerResponseService } from './../../../shared/services/server-response.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { PageHeaderService } from '../../../layout/container/page-header/page-header.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormDebugComponent } from 'src/app/testes/form-debug/form-debug.component';
import { ReqFormComponent } from '../req-form/req-form.component';

@Component({
  selector: 'app-req-new-page',
  templateUrl: './req-new-page.component.html',
  styleUrls: ['./req-new-page.component.css']
})
export class ReqNewPageComponent implements OnInit, OnDestroy {



  @ViewChild('formComponent') formComponent: ReqFormComponent;

  subscription: Subscription;

  constructor(
    private pageHeaderService: PageHeaderService,
    private requisiteService: RequisitesService,
    private serverResponseService: ServerResponseService
    ) { }


  ngOnInit() {
    this.pageHeaderService.title = 'Novo Requisito';
    this.pageHeaderService.upperLevel = 'Home';
    this.pageHeaderService.description = 'Insira as informações para criar um requisito';

    this.subscription = this.serverResponseService.responseEventEmitter.subscribe();
  }


  onTrySubmit() {
    const formGroup = this.formComponent.formulario;

    if (formGroup.valid) {
      this.onSubmit(formGroup.value);
    } else {
      Object.keys(formGroup.controls).forEach(
        campo => formGroup.get(campo).markAsTouched()
      );
    }
  }

  onSubmit(values) {
    this.requisiteService.addNewRequisite(values);
  }

  ngOnDestroy(): void {
    
  }
}
