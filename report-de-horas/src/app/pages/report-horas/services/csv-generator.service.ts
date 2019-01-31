import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvGeneratorService {

  constructor() { }


  gerarCSV(valores) {
    console.log(valores);
  }
}
