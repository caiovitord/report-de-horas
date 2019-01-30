import { PageHeaderService } from './page-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  titulo = '';
  descricao  = '';
  nivelSuperior = '';

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit() {
    this.titulo = this.pageHeaderService.getTitulo();
    this.descricao = this.pageHeaderService.getDescricao();
    this.nivelSuperior = this.pageHeaderService.getNivelSuperior();

  }

}
