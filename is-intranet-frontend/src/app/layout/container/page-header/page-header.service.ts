import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Serviço responsável por prover o nome da página ao page header
export class PageHeaderService {

  title = '';
  description  = '';
  upperLevel = '';

  constructor() { }


}
