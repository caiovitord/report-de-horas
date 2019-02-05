import { Injectable } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';
import { saveAs } from 'file-saver';

declare var require: any;

const FILE_NAME = 'ReportHoras.csv';

@Injectable({
  providedIn: 'root'
})
export class CsvGeneratorService {
  constructor() { }

  generateCSV(rhFormComponents: RhFormComponent[]) {
    const values: Object[] = [];

    let stringCSV = '';

    rhFormComponents.forEach(element => {
      values.push(element.formulario.value);
    });


    for (let i = 0; i < values.length; i++) {
      if (i === 0) {
        Object.keys(values[i]).forEach(v => stringCSV += v + ',');
        stringCSV += '\r\n';
      }
      Object.values(values[i]).forEach(v => stringCSV += v + ',');
      stringCSV += '\r\n';

    }

    const find = ',\r\n';
    const regEx = new RegExp(find, 'g');

    stringCSV = stringCSV.replace(regEx, '\r\n'); // Isso tira as vírgulas extras do final do código
    const find2 = 'null';
    const regEx2 = new RegExp(find2, 'g');
    stringCSV = stringCSV.replace(regEx2, ''); // Isso tira a observação nula, caso ocorra

    this.saveStringToCSV(stringCSV);
  }

  saveStringToCSV (string) {
    const FileSaver = require('file-saver');
    const blob = new Blob([string], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, FILE_NAME);
  }
}
