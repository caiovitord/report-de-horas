import { Component, OnInit } from '@angular/core';

import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';


@Component({
  selector: 'app-req-list',
  templateUrl: './req-list.component.html',
  styleUrls: ['./req-list.component.css']
})
export class ReqListComponent implements OnInit {

  constructor(
    private pageHeaderService: PageHeaderService
  ) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Lista de requisitos';
    this.pageHeaderService.upperLevel = 'Home';
    this.pageHeaderService.description = 'Veja a lista de requisitos';
  }

}
