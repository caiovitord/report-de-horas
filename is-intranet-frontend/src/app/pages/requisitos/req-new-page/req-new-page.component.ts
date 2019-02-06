import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';
import { Subscription } from 'rxjs';
import { ServerResponseService } from './../../../shared/services/server-response.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { PageHeaderService } from '../../../layout/container/page-header/page-header.service';
import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { FormDebugComponent } from 'src/app/testes/form-debug/form-debug.component';
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
      this.formComponent.formulario.reset();
      this.serverReponseComponent.reset();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onUploadButtonClicked() {
    
    
  }


  fileUpload(files) {
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
    const lines = csvString.split('\n');
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

}
