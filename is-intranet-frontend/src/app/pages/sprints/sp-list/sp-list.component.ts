import { ModalAlertComponent } from './../../../shared/modal-alert/modal-alert.component';

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


import { SprintService } from './../../../shared/services/sprint.service';
import { ServerResponseService } from './../../../shared/services/server-response.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { StringCommons } from './../../../shared/StringCommons';
import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sp-list',
  templateUrl: './sp-list.component.html',
  styleUrls: ['./sp-list.component.css']
})
export class SpListComponent implements OnInit, OnDestroy {


  infoModalMessage: string;
  sprintBeingDeleted;
  sprints$: Observable<any>;

  modalCallBackResolver: number;
  requisiteModalTitle: string;
  subscription: Subscription;


  @ViewChild('serverReponseComponent') serverReponseComponent: ServerResponseComponent;
  @ViewChild('modalAlertReqComponent') modalAlertReqComponent: ModalAlertComponent;



  constructor(
    private pageHeaderService: PageHeaderService,
    private sprintsService: SprintService,
    private requisitesService: RequisitesService,
    private serverResponseService: ServerResponseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Lista de Sprints';
    this.pageHeaderService.upperLevel = 'Sprints';
    this.pageHeaderService.description = '';


    this.refreshSprints();

    this.subscription = this.serverResponseService.responseEventEmitter
    .pipe(
      map(res => this.processResponse(res))
    )
    .subscribe();
  }




  refreshSprints() {
    this.sprints$ = this.sprintsService.getAllSprints();
  }



  minimize(str) {
    return StringCommons.minimize(str, 20);
  }


  onClickDelete(sprint) {
    this.infoModalMessage = 'Tem certeza que deseja deletar a sprint de nome ' + sprint.name + ' e número ' + sprint.number;
    this.modalCallBackResolver = 0;
    this.sprintBeingDeleted = sprint;
  }

  processResponse(res: any) {
    if (res.status && res.status === 200) {
      this.serverReponseComponent.reset();
      this.sprintBeingDeleted = null;
    }
    this.refreshSprints();

  }

  onClickShowModalRequisite(sprint) {
    this.requisiteModalTitle = 'Requisitos da Sprint ' + sprint.number;
    this.modalCallBackResolver = 1;
    this.modalAlertReqComponent.moreDataTableComponent.requisites$ = this.requisitesService.getRequisiteListFromSprintId(sprint.id);
  }

  onConfirmModal(callBackResolver) {
    switch (callBackResolver) {
      case 0:
        this.sprintsService.deleteSprintById(this.sprintBeingDeleted.id);
        break;

      default:

    }
  }


  formatStatus(str) {
    return (str === '') ? '~' : str;
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
