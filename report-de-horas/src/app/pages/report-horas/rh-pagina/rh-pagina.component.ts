import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { AddRequisitoService } from './../services/add-requisito.service';
import { PageHeaderService } from './../../../estrutura/container/page-header/page-header.service';
import { CsvGeneratorService } from '../services/csv-generator.service';
import { RhContainerComponent } from './rh-container/rh-container.component';
import { RhFormComponent } from '../rh-form/rh-form.component';

@Component({
  selector: 'app-rh-pagina',
  templateUrl: './rh-pagina.component.html',
  styleUrls: ['./rh-pagina.component.css']
})
export class RhPaginaComponent implements OnInit, AfterViewInit {



  @ViewChild('appContainer') appContainer;
  @ViewChild('primeiroForm') primeiroForm;

  formComponents: RhFormComponent[] = [];


  constructor(
    private pageHeaderService: PageHeaderService,
    private addRequisitoService: AddRequisitoService,
    private gerarCsvService: CsvGeneratorService,
    private elem: ElementRef
    ) { }

  ngOnInit() {
    this.pageHeaderService.titulo = 'Report de Horas';
    this.pageHeaderService.nivelSuperior = 'Home';
    this.pageHeaderService.descricao = 'Insira as horas trabalhadas por requisito';



    this.addFormOnFormList(this.primeiroForm);
  }


  ngAfterViewInit(): void {
  }


  addFormOnFormList(rhFormComponent: RhFormComponent) {
    this.formComponents.push(rhFormComponent);
    console.log(this.formComponents);
  }

  onAddRequisito() {
      const elemRef = this.addRequisitoService.createAnotherForm(this.appContainer.viewContainerRef);
      this.addFormOnFormList(elemRef.instance);
  }

  gerarCSV() {
    this.gerarCsvService.gerarCSV(this.formComponents);
  }

}
