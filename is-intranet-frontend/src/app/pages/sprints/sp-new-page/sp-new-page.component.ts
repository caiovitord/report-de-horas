import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { SprintService } from './../../../shared/services/sprint.service';
import { SpFormComponent } from './../sp-form/sp-form.component';
import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { ServerResponseService } from './../../../shared/services/server-response.service';
import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';

@Component({
  selector: 'app-sp-new-page',
  templateUrl: './sp-new-page.component.html',
  styleUrls: ['./sp-new-page.component.css']
})
export class SpNewPageComponent implements OnInit, OnDestroy {

  @ViewChild('serverReponseComponent') serverReponseComponent: ServerResponseComponent;
  @ViewChild('formComponent') formComponent: SpFormComponent;
  subscription: Subscription;

  constructor(
    private pageHeaderService: PageHeaderService,
    private serverResponseService: ServerResponseService,
    private sprintService: SprintService
  ) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Nova Sprint';
    this.pageHeaderService.upperLevel = 'Sprints';
    this.pageHeaderService.description = 'Insira as informações para criar uma sprint';


    this.subscription = this.serverResponseService.responseEventEmitter
      .pipe(
        map(res => this.processResponse(res))
      )
      .subscribe();
  }
  processResponse(res) {
    if (res.status && res.status === 200) {
      this.formComponent.formulario.reset();
      this.serverReponseComponent.reset();
    }
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
    this.sprintService.addNewSprintWithRequisites(values);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
