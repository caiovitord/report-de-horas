import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { StringCommons } from './../../../shared/StringCommons';


@Component({
  selector: 'app-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.css']
})
export class ReqListComponent implements OnInit {

  constructor(
    private pageHeaderService: PageHeaderService,
    private requisitesService: RequisitesService
  ) { }


  requisites$: Observable<any>;

  ngOnInit() {
    this.pageHeaderService.title = 'Lista de requisitos';
    this.pageHeaderService.upperLevel = 'Requisitos';
    this.pageHeaderService.description = '';

    this.requisites$ = this.requisitesService.getAllRequisites();

  }


  minimize(str) {
    return StringCommons.minimize(str, 20);
  }

}
