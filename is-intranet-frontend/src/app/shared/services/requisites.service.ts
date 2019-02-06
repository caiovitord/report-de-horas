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

  getRequisitos(): Observable<any> {
    return this.http.get(EndPoints.REQUISITES)
    .pipe(
      map(dado => dado.json() )
    );
  }


  addNewRequisite(values) {
    this.serverResponseService.startResponse();

    console.log(values);

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
}
