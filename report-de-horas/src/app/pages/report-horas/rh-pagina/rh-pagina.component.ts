import { PageHeaderService } from './../../../estrutura/container/page-header/page-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rh-pagina',
  templateUrl: './rh-pagina.component.html',
  styleUrls: ['./rh-pagina.component.css']
})
export class RhPaginaComponent implements OnInit {

  constructor(private pageHeaderService: PageHeaderService) { }

  ngOnInit() {
    this.pageHeaderService.titulo = 'Report de Horas';
    this.pageHeaderService.nivelSuperior = 'Home';
    this.pageHeaderService.descricao = 'Insira as horas trabalhadas por requisito';
  }

}
