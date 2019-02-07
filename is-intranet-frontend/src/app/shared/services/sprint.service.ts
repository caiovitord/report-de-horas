import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, delay, timeout, catchError } from 'rxjs/operators';
import { ServerResponseService } from './server-response.service';
import { EndPoints } from '../EndPoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintService {



  constructor(private http: Http,
    private serverResponseService: ServerResponseService) { }


  getAllSprints(): Observable<any> {
    return this.http.get(EndPoints.SPRINT)
      .pipe(
        map(dado => dado.json())
      );
  }


  getSprintById(id: number): any {
    return this.http.get(EndPoints.SPRINT + '/' + id)
      .pipe(
        map(dado => dado.json())
      );
  }


  endOfRequisitonResponseProcessing(response) {
    this.serverResponseService.setResponse(response);
  }

  deleteSprintById(id: number) {
    this.serverResponseService.startResponse();

    this.http.delete(EndPoints.SPRINT + '/' + id).pipe(
      delay(200),
      timeout(2000),
      catchError(e => {
        this.endOfRequisitonResponseProcessing(e);
        return null;
      }),
      map(response => this.endOfRequisitonResponseProcessing(response))
    ).subscribe();
  }

  batchAddSprintRequisiteRelation(response, requisiteIds, editingSprintId?) {
    console.log(response);
    if (response.status === 200) { // Ocorre quando está criando uma nova sprint com requisitos
      const idNewSprint = JSON.parse(response._body).id;
      this.addNewSprintRequisiteRelation(idNewSprint, requisiteIds);
    } else {
      if (response.status === 204) {
        this.addNewSprintRequisiteRelation(editingSprintId, requisiteIds);
      } else {
        this.endOfRequisitonResponseProcessing(response);
      }
    }
  }

  addNewSprintWithRequisites(values) {
    this.serverResponseService.startResponse();

    const requisiteIds = values.requisites;
    this.http.post(EndPoints.SPRINT, values)
      .pipe(
        delay(200),
        timeout(2000),
        catchError(e => {
          this.endOfRequisitonResponseProcessing(e);
          return null;
        }),
        map(response => this.batchAddSprintRequisiteRelation(response, requisiteIds))
      ).subscribe();
  }

  addNewSprintRequisiteRelation(idSprint, requisiteIds) {
    requisiteIds.forEach(idRequisito => {

      const relationObject = { sprintId: idSprint, requisiteId: idRequisito };
      // console.log(relationObject);

      this.http.put(EndPoints.SPRINT + '/' + idSprint + '/requisites/rel/' + idRequisito
        , relationObject)
        .pipe(
          delay(100),
          timeout(2000),
          catchError(e => {
            this.endOfRequisitonResponseProcessing(e);
            return null;
          }),
          map(response => {
            this.responseProcessingAfterInsertRelation(response, idRequisito, requisiteIds);
          })
        ).subscribe();
    });

  }

  editSprintWithRequisites(values) {
    this.serverResponseService.startResponse();
    const requisiteIds = values.requisites;

    this.http.put(EndPoints.SPRINT, values)
      .pipe(
        delay(200),
        timeout(2000),
        catchError(e => {
          this.endOfRequisitonResponseProcessing(e);
          return null;
        }),
        map(response => {
          this.deleteOldSprintRequisites(response, values.id, requisiteIds);
        })
      ).subscribe();
  }

  deleteOldSprintRequisites(response, sprintId, requisiteIds) {
    if (response.status !== 200) {
      this.endOfRequisitonResponseProcessing(response);
      return;
    }

    this.http.delete(EndPoints.SPRINT + '/' + sprintId + '/requisites')
      .pipe(
        timeout(2000),
        catchError(e => {
          this.endOfRequisitonResponseProcessing(e);
          return null;
        }),
        map(n_response => this.batchAddSprintRequisiteRelation(n_response, requisiteIds, sprintId)
        )
      ).subscribe();
  }



  // Essa função garante que a resposta só será positiva se todas forem positivas. Não é feito nada se der erro em uma relação de requisito
  responseProcessingAfterInsertRelation(response, idRequisito, requisiteIds) {
    if (response.status !== 200) {
      this.serverResponseService.setResponse(response);
    } else {
      if (response.status === 200 && requisiteIds[requisiteIds.length - 1] === idRequisito) {// Se for o ultimo requisito
        this.serverResponseService.setResponse(response);
      }
    }
  }

}
