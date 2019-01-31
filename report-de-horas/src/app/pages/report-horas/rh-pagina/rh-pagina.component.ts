import { DeleteRequisitoService } from './../services/delete-requisito.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ComponentRef } from '@angular/core';

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




  constructor(
    private pageHeaderService: PageHeaderService,
    private addRequisitoService: AddRequisitoService,
    private gerarCsvService: CsvGeneratorService,
    private deleteRequisitoService: DeleteRequisitoService
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
    this.addRequisitoService.formComponents.push(rhFormComponent);
  }

  onAddRequisito() {
      const elemRef = this.addRequisitoService.createAnotherForm(this.appContainer.viewContainerRef);
      this.deleteRequisitoService.dynamicFormComponentRef.push(elemRef);
      this.addFormOnFormList(elemRef.instance);
  }



  gerarCSV() {
    this.gerarCsvService.gerarCSV(this.addRequisitoService.formComponents);
  }

}
