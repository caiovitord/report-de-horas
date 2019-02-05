import { RemoveRequisiteService } from '../services/remove-requisite.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ComponentRef } from '@angular/core';

import { AddRequisiteFormService } from '../services/add-requisite-form.service';
import { PageHeaderService } from '../../../layout/container/page-header/page-header.service';
import { CsvGeneratorService } from '../services/csv-generator.service';
import { RhContainerComponent } from './rh-container/rh-container.component';
import { RhFormComponent } from '../rh-form/rh-form.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-rh-pagina',
  templateUrl: './rh-page.component.html',
  styleUrls: ['./rh-page.component.css']
})
export class RhPageComponent implements OnInit, AfterViewInit {



  @ViewChild('appContainer') appContainer;
  @ViewChild('firstForm') firstForm;




  constructor(
    private pageHeaderService: PageHeaderService,
    private addRequisitesFormService: AddRequisiteFormService,
    private gerarCsvService: CsvGeneratorService,
    private removeRequisiteService: RemoveRequisiteService
  ) { }

  ngOnInit() {
    this.pageHeaderService.title = 'Report de Horas';
    this.pageHeaderService.upperLevel = 'Home';
    this.pageHeaderService.description = 'Insira as horas trabalhadas por requisito';



    this.addFormOnFormList(this.firstForm);
  }


  ngAfterViewInit(): void {
  }


  addFormOnFormList(rhFormComponent: RhFormComponent) {
    this.addRequisitesFormService.formComponents.push(rhFormComponent);
  }

  onAddRequisite() {
    const elemRef = this.addRequisitesFormService.createAnotherForm(this.appContainer.viewContainerRef);
    this.removeRequisiteService.dynamicFormComponentRef.push(elemRef);
    this.addFormOnFormList(elemRef.instance);
  }



  tryGenerateCSV(rhFormComponent: RhFormComponent) {
    let todosValidos = true;
    this.addRequisitesFormService.formComponents.forEach(cada => {
      if (!cada.formulario.valid) {
        todosValidos = false;
      }
    });

    if (todosValidos) {
      this.gerarCsvService.generateCSV(this.addRequisitesFormService.formComponents);
    } else {

      this.addRequisitesFormService.formComponents.forEach(cada => {
        Object.keys(cada.formulario.controls).forEach(campo => {
//          console.log(campo);
          const controle = cada.formulario.get(campo);
         controle.markAsTouched();

        });

      });
  }
  }
}
