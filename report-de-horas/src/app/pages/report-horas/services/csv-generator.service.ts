import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';

declare var require: any;


@Injectable({
  providedIn: 'root'
})
export class CsvGeneratorService {



  constructor() { }


  gerarCSV(rhFormComponents: RhFormComponent[]) {
    const values: Object[] = [];

    let stringCSV = '';

    rhFormComponents.forEach(element => {
      values.push(element.formulario.value);
    });

    // console.log(values);

    const mString = JSON.stringify(values[0]);

    // console.log("Stringuificado" + mString);

    for (let i = 0; i < values.length ; i++) {
      if ( i === 0 ) {
        Object.keys(values[i]).forEach( v => stringCSV  += v + ',');
        stringCSV += '\r\n';
     }
     Object.values(values[i]).forEach( v => stringCSV  += v + ',');
     stringCSV += '\r\n';

    }

    const find = ',\r\n';
    const regEx = new RegExp(find, 'g');

    stringCSV = stringCSV.replace(regEx, '\r\n'); //Isso tira as vírgulas extras do final do código
    // console.log(stringCSV);

    const find2 = 'null';
    const regEx2 = new RegExp(find, 'g');
    stringCSV = stringCSV.replace(regEx, ''); // Isso tira a observação nula, caso ocorra

    const FileSaver = require('file-saver');
    const blob = new Blob([stringCSV], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'ReportHoras.csv');

    // console.log(Object.keys(values[0]));
    // console.log(Object.values(values[0]));
  }
}
