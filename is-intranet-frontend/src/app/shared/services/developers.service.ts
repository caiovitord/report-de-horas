import { EndPoints } from '../EndPoints';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor(private http: Http) { }

  getDevelopers() {
    return this.http.get(EndPoints.DEVELOPERS)
    .pipe(
      map(dado => dado.json())
    );
  }

  getArea() {
    return [
      {name: 'Back-end'},
      {name: 'Front-end'}
    ];
  }

}
