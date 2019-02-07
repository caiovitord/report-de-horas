import { Component, OnInit } from '@angular/core';

import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { ServerResponseService } from './../../../shared/services/server-response.service';

@Component({
  selector: 'app-sp-new-page',
  templateUrl: './sp-new-page.component.html',
  styleUrls: ['./sp-new-page.component.css']
})
export class SpNewPageComponent implements OnInit {



  constructor(
    private pageHeaderService: PageHeaderService,
    private serverResponseService: ServerResponseService
  ) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Nova Sprint';
    this.pageHeaderService.upperLevel = 'Sprints';
    this.pageHeaderService.description = 'Insira as informações para criar uma sprint';


  }

}
