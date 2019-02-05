import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-req-page',
  templateUrl: './req-page.component.html',
  styleUrls: ['./req-page.component.css']
})
export class ReqPageComponent implements OnInit {

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Novo Requisito';
    this.pageHeaderService.upperLevel = 'Home';
    this.pageHeaderService.description = 'Insira as informações para criar um requisito';
  }

}
