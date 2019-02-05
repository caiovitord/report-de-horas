import { PageHeaderService } from '../../../layout/container/page-header/page-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-req-new-page',
  templateUrl: './req-new-page.component.html',
  styleUrls: ['./req-new-page.component.css']
})
export class ReqNewPageComponent implements OnInit {

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Novo Requisito';
    this.pageHeaderService.upperLevel = 'Home';
    this.pageHeaderService.description = 'Insira as informações para criar um requisito';
  }

}
