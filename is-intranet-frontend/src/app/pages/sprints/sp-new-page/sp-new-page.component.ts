import { SprintService } from './../../../shared/services/sprint.service';
import { SpFormComponent } from './../sp-form/sp-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { ServerResponseService } from './../../../shared/services/server-response.service';

@Component({
  selector: 'app-sp-new-page',
  templateUrl: './sp-new-page.component.html',
  styleUrls: ['./sp-new-page.component.css']
})
export class SpNewPageComponent implements OnInit {

  @ViewChild('formComponent') formComponent: SpFormComponent;

  constructor(
    private pageHeaderService: PageHeaderService,
    private serverResponseService: ServerResponseService,
    private sprintService: SprintService
  ) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Nova Sprint';
    this.pageHeaderService.upperLevel = 'Sprints';
    this.pageHeaderService.description = 'Insira as informações para criar uma sprint';


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
}
