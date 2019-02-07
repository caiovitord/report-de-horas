
import { Component, OnInit } from '@angular/core';


import { SprintService } from './../../../shared/services/sprint.service';
import { ServerResponseService } from './../../../shared/services/server-response.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { StringCommons } from './../../../shared/StringCommons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp-list',
  templateUrl: './sp-list.component.html',
  styleUrls: ['./sp-list.component.css']
})
export class SpListComponent implements OnInit {

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

  }



  minimize(str) {
    return StringCommons.minimize(str, 20);
  }

}
