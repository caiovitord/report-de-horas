import { ServerResponseService } from './../../../shared/services/server-response.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { StringCommons } from './../../../shared/StringCommons';
import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.css']
})
export class ReqListComponent implements OnInit {



  @ViewChild('serverReponseComponent') serverReponseComponent: ServerResponseComponent;


  infoModalMessage: string;
  requisites$: Observable<any>;
  requisiteBeingDeleted;
  subscription: any;


  constructor(
    private pageHeaderService: PageHeaderService,
    private requisitesService: RequisitesService,
    private serverResponseService: ServerResponseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Lista de requisitos';
    this.pageHeaderService.upperLevel = 'Requisitos';
    this.pageHeaderService.description = '';

    this.refreshRequisites();

    this.subscription = this.serverResponseService.responseEventEmitter
    .pipe(
      map(res => this.processResponse(res))
    )
    .subscribe();
  }

  refreshRequisites() {
    this.requisites$ = this.requisitesService.getAllRequisites();
  }

  minimize(str) {
    return StringCommons.minimize(str, 20);
  }

  onClickDelete(requisite) {
    this.infoModalMessage = 'Tem certeza que deseja deletar o requisito de código ' + requisite.code ;
    this.requisiteBeingDeleted = requisite;
  }

  processResponse(res: any) {
    if (res.status && res.status === 200) {
      this.serverReponseComponent.reset();
      this.requisiteBeingDeleted = null;
    }
    this.refreshRequisites();

  }


  onConfirmModal() {
    this.requisitesService.deleteRequisite(this.requisiteBeingDeleted);
  }
}
