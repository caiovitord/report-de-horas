import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuantidadeFormsService {

  public quantidadeDeFormularios = 1; // Sempre já tem ao menos  um form

  constructor() { }
}
