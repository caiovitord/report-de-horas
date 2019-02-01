import { DeleteRequisitoService } from './../services/delete-requisito.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ComponentRef } from '@angular/core';

import { AddRequisitoService } from './../services/add-requisito.service';
import { PageHeaderService } from './../../../estrutura/container/page-header/page-header.service';
import { CsvGeneratorService } from '../services/csv-generator.service';
import { RhContainerComponent } from './rh-container/rh-container.component';
import { RhFormComponent } from '../rh-form/rh-form.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

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



  gerarCSV(rhFormComponent: RhFormComponent) {
    let todosValidos = true;
    this.addRequisitoService.formComponents.forEach(cada => {
      if (!cada.formulario.valid)
        todosValidos = false;
    })

    if (todosValidos) {
      this.gerarCsvService.gerarCSV(this.addRequisitoService.formComponents);
    } else {

      this.addRequisitoService.formComponents.forEach(cada => {
        Object.keys(cada.formulario.controls).forEach(campo => {
//          console.log(campo);
          const controle = cada.formulario.get(campo);
         controle.markAsTouched();

        })

      });
  }
  }
}
