import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopersService {

  constructor() { }

  getCargos() {
    return [
      {nome: 'Dev 1'},
      {nome: 'Dev 2'},
      {nome: 'Dev 3'}
    ];
  }

  getArea() {
    return [
      {nome: 'Beck'},
      {nome: 'Front'}
    ];
  }

}
