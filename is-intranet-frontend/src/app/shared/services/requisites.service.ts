import { EndPoints } from './../endpoints';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RequisitesService {

  constructor(private http: Http) { }

  getRequisitos(): Observable<any> {
    return this.http.get(EndPoints.REQUISITES)
    .pipe(
      map(dado => dado.json() )
    );
  }
}
