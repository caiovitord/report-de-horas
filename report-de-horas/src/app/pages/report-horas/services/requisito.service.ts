import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const END_POINT = 'assets/dados/requisitos.json';

@Injectable({
  providedIn: 'root'
})
export class RequisitoService {

  constructor(private http: Http) { }

  getRequisitos(): Observable<any> {
    return this.http.get(END_POINT)
    .pipe(
      map(dado => dado.json() )
    );
  }
}
