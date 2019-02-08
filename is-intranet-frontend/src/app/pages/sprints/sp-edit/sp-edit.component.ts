import { SpFormComponent } from './../sp-form/sp-form.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';


import { SprintService } from './../../../shared/services/sprint.service';
import { ServerResponseComponent } from './../../../shared/server-response/server-response.component';
import { PageHeaderService } from './../../../layout/container/page-header/page-header.service';
import { RequisitesService } from './../../../shared/services/requisites.service';
import { ServerResponseService } from './../../../shared/services/server-response.service';
import { StringCommons } from './../../../shared/StringCommons';

@Component({
  selector: 'app-sp-edit',
  templateUrl: './sp-edit.component.html',
  styleUrls: ['./sp-edit.component.css']
})
export class SpEditComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];

  id: number;

  requisite$;

  @ViewChild('serverReponseComponent') serverReponseComponent: ServerResponseComponent;
  @ViewChild('formComponent') formComponent: SpFormComponent;

  constructor(
    private route: ActivatedRoute,
    private pageHeaderService: PageHeaderService,
    private sprintsService: SprintService,
    private requisiteService: RequisitesService,
    private serverResponseService: ServerResponseService

  ) { }

  ngOnInit() {

    this.pageHeaderService.title = 'Editar sprint';
    this.pageHeaderService.upperLevel = 'Sprints';
    this.pageHeaderService.description = '';

    // Favor não assustar com o código demoníaco abaixo. Ele preenche os dados do formulário
    this.subscription.push( // Serve para se desinscrever depois, no método onDestroy
      this.route.params.subscribe( // Primeiro pega a rota, e pega o ID
        (params: any) => {
          this.id = params['id']; // Pegamos o ID da sprint sendo editada
          this.subscription.push(  // Serve para se desinscrever depois, no método onDestroy
            this.sprintsService.getSprintById(this.id) // Pegamos o objeto sprint pelo ID
              .pipe(
                map(
                  dado => { // Aqui é o resultado do objeto da sprint

                    this.subscription.push( // Serve para se desinscrever depois, no método onDestroy
                      this.requisiteService.getRequisiteListFromSprintId(this.id) // Pega todos os requisitos daquela sprint
                        .pipe(
                          map(reqs => { // Para cada requisito que foi pego, temos q achar ele no nosso NG select,
                            reqs.forEach(element => { // e depois selecionar esse item
                              this.formComponent.ngSelect
                                .select( // Cada item de requisito sendo selecionado
                                  this.formComponent.ngSelect.itemsList.findItem(element.id)
                                  // Cada item de requisito da sprint sendo encontrado
                                );
                            });
                          })
                        ).subscribe());

                    this
                      .formComponent
                      .formulario
                      .patchValue(dado); // Preenche com o resto dos dados

                  })
              ).subscribe());
        }
      ));


    this.subscription.push(
      this.serverResponseService.responseEventEmitter
        .pipe(
          map(res => this.processResponse(res))
        )
        .subscribe());
  }


  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }


  onTrySubmitEdit() {
    const formGroup = this.formComponent.formulario;
    if (formGroup.valid) {
      this.onEdit(formGroup.value);
    } else {
      Object.keys(formGroup.controls).forEach(
        campo => formGroup.get(campo).markAsTouched()
      );
    }
  }


  processResponse(res: any) {
    if (res.status && res.status === 200) {
      // this.formComponent.formulario.reset();
      this.serverReponseComponent.reset();
    }
  }

  onEdit(values: any) {
    values['id'] = this.id;
    this.sprintsService.editSprintWithRequisites(values);
  }
}
