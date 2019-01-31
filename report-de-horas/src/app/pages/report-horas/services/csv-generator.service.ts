import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';

@Injectable({
  providedIn: 'root'
})
export class CsvGeneratorService {

  constructor() { }


  gerarCSV(rhFormComponents: RhFormComponent[]) {
    const values: Object[] = [];

    rhFormComponents.forEach(element => {
      values.push(element.formulario.value);
    });

    console.log(values);
    const mString = JSON.stringify(values[0]);
    console.log("Stringuificado" + mString);

    console.log(Object.keys(values[0]));
    console.log(Object.values(values[0]));
  }
}
