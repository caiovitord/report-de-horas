import { FormGroup } from '@angular/forms';

export class FormCommons {

  // Verifica VALID e TOUCHED //AINDA NAO SEI USAR 
  vvt(nomeCampo: string, formulario: FormGroup) {
    const formControl  = formulario.get(nomeCampo);
    return formControl.touched && formControl.invalid;
  }

}
