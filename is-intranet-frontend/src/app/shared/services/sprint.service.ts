import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, delay, timeout, catchError } from 'rxjs/operators';

import { ServerResponseService } from './server-response.service';
import { EndPoints } from '../EndPoints';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private http: Http,
    private serverResponseService: ServerResponseService) { }

  getSprints() {
    return this.http.get(EndPoints.SPRINT)
      .pipe(
        map(dado => dado.json())
      );
  }


  addNewSprintWithRequisites(values) {
    this.serverResponseService.startResponse();

    const requisiteIds = values.requisites;
    //console.log(requisiteIds);

    this.http.post(EndPoints.SPRINT, values)
      .pipe(
        delay(200),
        timeout(2000),
        catchError(e => {
          this.responseProcessing(e);
          return null;
        }),
        map(response => this.responseProcessing(response, requisiteIds))
      ).subscribe();
  }

  responseProcessing(response, requisiteIds?) {
    if (response.status === 200) {
      //console.log(response._body);

      const idNewSprint = JSON.parse(response._body).id;
      this.addNewRequisiteRelation(idNewSprint, requisiteIds);
    } else {
      this.serverResponseService.setResponse(response);
    }
  }

  addNewRequisiteRelation(idNewSprint, requisiteIds) {
    requisiteIds.forEach(idRequisito => {

      const relationObject = { sprintId: idNewSprint, requisiteId: idRequisito };
     // console.log(relationObject);

      this.http.put(EndPoints.SPRINT + '/' + idNewSprint + '/requisites/rel/' + idRequisito
        , relationObject)
        .pipe(
          delay(100),
          timeout(2000),
          catchError(e => {
            this.responseProcessing(e);
            return null;
          }),
          map(response => {
            this.responseProcessingAfterInsertRelation(response, idRequisito, requisiteIds);
          })
        ).subscribe();
    });

  }

  // Essa função garante que a resposta só será positiva se todas forem positivas. Não é feito nada se der erro em uma relação de requisito
  responseProcessingAfterInsertRelation(response, idRequisito , requisiteIds) {
    if (response.status !== 200) {
      this.serverResponseService.setResponse(response);
    } else {
      if (response.status === 200 && requisiteIds[requisiteIds.length - 1] === idRequisito) {// Se for o ultimo requisito
        this.serverResponseService.setResponse(response);
      }
    }
  }

}
