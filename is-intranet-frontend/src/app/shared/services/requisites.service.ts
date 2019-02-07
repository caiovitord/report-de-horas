import { ServerResponseService } from './server-response.service';
import { EndPoints } from '../EndPoints';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, delay, timeout, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RequisitesService {


  constructor(
    private http: Http,
    private serverResponseService: ServerResponseService
  ) { }

  getAllRequisites(): Observable<any> {
    return this.http.get(EndPoints.REQUISITES)
      .pipe(
        map(dado => dado.json())
      );
  }


  addNewRequisite(values) {
    this.serverResponseService.startResponse();


    this.http.post(EndPoints.REQUISITES, values)
      .pipe(
        delay(200),
        timeout(2000),
        catchError(e => {
          this.responseProcessing(e);
          return null;
        }),
        map(response => this.responseProcessing(response))
      ).subscribe();
  }

  getRequisiteById(id: number): any {
    return this.http.get(EndPoints.REQUISITES + '/' + id)
      .pipe(
        map(dado => dado.json())
      );
  }

  editRequisite(values: any): any {
    this.serverResponseService.startResponse();

    this.http.put(EndPoints.REQUISITES, values)
      .pipe(
        delay(200),
        timeout(2000),
        catchError(e => {
          this.responseProcessing(e);
          return null;
        }),
        map(response => this.responseProcessing(response))
      ).subscribe();
  }

  responseProcessing(response) {
    this.serverResponseService.setResponse(response);
  }


  deleteRequisite(requisiteBeingDeleted) {
    this.serverResponseService.startResponse();

    this.http.delete(EndPoints.REQUISITES + '/' + requisiteBeingDeleted.id).pipe(
      delay(200),
      timeout(2000),
      catchError(e => {
        this.responseProcessing(e);
        return null;
      }),
      map(response => this.responseProcessing(response))
    ).subscribe();
  }

  getRequisiteListFromSprintId(sprintId) {
    return this.http.get(EndPoints.SPRINT + '/' + sprintId + '/requisites')
      .pipe(
        map(dado => dado.json())
      );

  }



}
