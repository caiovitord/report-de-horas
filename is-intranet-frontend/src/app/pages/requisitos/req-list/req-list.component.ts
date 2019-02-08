import { ServerResponseService } from './../../../shared/services/server-response.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { StringCommons } from './../../../shared/StringCommons';
import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';
import { map } from 'rxjs/operators';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      // ...
      state('fadeIn', style({
        opacity: 1,
      })),
      state('fadeOut', style({
        opacity: 0,
        display: 'none'
      })),
      transition('fadeIn => fadeOut', [
        animate('0.4s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('0.4s')
      ]),
    ])
  ]
})
export class ReqListComponent implements OnInit {



  @ViewChild('serverReponseComponent') serverReponseComponent: ServerResponseComponent;
  @ViewChild('searchBar') searchBar: ElementRef;


  infoModalMessage: string;
  requisites$: Observable<any>;
  requisiteBeingDeleted;
  subscription: Subscription;

  searchStr = '';


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

  onInputSearch() {
    this.searchStr = this.searchBar.nativeElement.value;
  }
  canShowSearch(req) {
    return req.code.toLowerCase().includes(this.searchStr)
      || req.title.toLowerCase().includes(this.searchStr)
      || req.area.toLowerCase().includes(this.searchStr)
      || String(req.storypoints).toLowerCase().includes(this.searchStr)
      || req.description.toLowerCase().includes(this.searchStr);
  }

  refreshRequisites() {
    this.requisites$ = this.requisitesService.getAllRequisites();
  }

  minimize(str) {
    return StringCommons.minimize(str, 20);
  }

  onClickDelete(requisite) {
    this.infoModalMessage = 'Tem certeza que deseja deletar o requisito de código ' + requisite.code;
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
