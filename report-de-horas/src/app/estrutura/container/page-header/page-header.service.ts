import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Serviço responsável por prover o nome da página ao page header
export class PageHeaderService {

  titulo = '';
  descricao  = '';
  nivelSuperior = '';

  constructor() { }

  getTitulo() {
    return this.titulo;
  }

  getDescricao() {
    return this.descricao;
  }

  getNivelSuperior() {
    return this.nivelSuperior;
  }

}
