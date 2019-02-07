import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';
import { Subscription } from 'rxjs';
import { ServerResponseService } from './../../../shared/services/server-response.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { PageHeaderService } from '../../../layout/container/page-header/page-header.service';
import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { ReqFormComponent } from '../req-form/req-form.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-req-new-page',
  templateUrl: './req-new-page.component.html',
  styleUrls: ['./req-new-page.component.css']
})
export class ReqNewPageComponent implements OnInit, OnDestroy {



  @ViewChild('formComponent') formComponent: ReqFormComponent;
  @ViewChild('serverReponseComponent') serverReponseComponent: ServerResponseComponent;


  subscription: Subscription;

  showCsvTable = false;
  tableRequisites;
  files: any;

  constructor(
    private pageHeaderService: PageHeaderService,
    private requisiteService: RequisitesService,
    private serverResponseService: ServerResponseService
  ) { }


  ngOnInit() {
    this.pageHeaderService.title = 'Novo Requisito';
    this.pageHeaderService.upperLevel = 'Requisitos';
    this.pageHeaderService.description = 'Insira as informações para criar um requisito';

    this.subscription = this.serverResponseService.responseEventEmitter
      .pipe(
        map(res => this.processResponse(res))
      )
      .subscribe();
  }



  onTrySubmit() {
    const formGroup = this.formComponent.formulario;

    if (formGroup.valid) {
      this.onSubmit(formGroup.value);
    } else {
      Object.keys(formGroup.controls).forEach(
        campo => formGroup.get(campo).markAsTouched()
      );
    }
  }

  onSubmit(values) {
    this.requisiteService.addNewRequisite(values);
  }

  processResponse(res: any) {
    if (res.status && res.status === 200) {
      if (this.formComponent) {
        this.formComponent.formulario.reset();
      }
      this.tableRequisites = null;
      this.serverReponseComponent.reset();
      this.dismissTableWithDelay();
    }
  }
  async dismissTableWithDelay() {
    await this.delay(3000);
    this.showCsvTable = false;
    this.files = false;
    const element: HTMLElement = document.getElementById('fileInput') as HTMLElement;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onConfirmModal() {
    const element: HTMLElement = document.getElementById('fileInput') as HTMLElement;
    element.click();
  }

  fileUpload(files) {
    this.files = files;

    const file: File = files.item(0);
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = () => {
      this.tableRequisites = this.csvStringToJsonObject(fileReader.result);

      console.log(this.tableRequisites);

      this.showCsvTable = true;

    };
  }


  csvStringToJsonObject(csvString) {
    const lines = csvString.split('\r\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    result.pop(); // Remove a ultima linha indesejada
    return result;
  }


  onTrySubmitCSVTable() {
    this.serverResponseService.startResponse();
    if (this.existNullValuesInCSV()) {
      this.serverResponseService.setErrorResponseMessage('Existem valores nulos');
    } else {
      this.onSubmitCSVTable();
    }
  }

  onSubmitCSVTable() {
    this.requisiteService.addNewRequisite(this.tableRequisites);
  }


  existNullValuesInCSV(): boolean {
    let thereIsNullValue = false;
    this.tableRequisites.forEach(element => {
      Object.values(element).forEach(cada => {
        if (cada == null || cada === '') {
          thereIsNullValue = true;
        }
      });
    });
    return thereIsNullValue;
  }


  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
