import { RequisitoService } from './../../services/requisito.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formteste',
  templateUrl: './formteste.component.html',
  styleUrls: ['./formteste.component.css']
})

export class FormtesteComponent implements OnInit {


  formulario: FormGroup;
  idRequisitoSelecionado: number;

  requisitos$: Observable<any>;


  constructor(
    private formBuilder: FormBuilder,
    private requisitoService: RequisitoService) { }

  ngOnInit() {


    this.requisitos$ = this.requisitoService.getRequisitos();

    this.formulario = this.formBuilder.group({
      requisito: [null, [Validators.required]],
      horasTrabalhadas: [0, [Validators.required, Validators.min(0.1)]],
      diaTrabalho: [null, [Validators.required]],
      conclusao: [null, [Validators.required, Validators.min(10), Validators.minLength(2), Validators.maxLength(3), Validators.max(100)]],
      observacao: [null, ]

    });

    this.impedirValoresNegativos();


    this.formulario.get('horasTrabalhadas').valueChanges
      .pipe(
        delay(500),
        map(valor =>
          this.onHorasTrabalhadasChanged(valor)))
      .subscribe();

    this.formulario.get('conclusao').valueChanges
      .pipe(
        map(valor => this.onPorcentagemConclusaoChanged(valor)))
      .subscribe();

  }




  onPorcentagemConclusaoChanged(valor: number) {
    const formConclusao = this.formulario.get('conclusao');

    // Garante que o valor sempre será multiplo de 10
    // console.log(valor);
    // Se o resto for zero, é multiplo de 10
    const restoZero = (valor / 10) % 1;

    if (restoZero !== 0) {
      // console.log('Arredondou');
      formConclusao.setValue(
        valor * 10 // Ajudao usuário a digitar, 1 , 2 , 3 , e já colocar o valor mais apropriado
      );
    }
  }






  onHorasTrabalhadasChanged(valor: number) {
    const formHorasTrabalhadas = this.formulario.get('horasTrabalhadas');

    // Garante que o valor sempre será multiplo de 0.5
    // console.log(valor);
    // Se o resto for zero, é multiplo de 0.5
    const restoZero = (valor / 0.5) % 1;

    if (restoZero !== 0) {
      // console.log('Arredondou');
      formHorasTrabalhadas.setValue(
        Math.ceil(formHorasTrabalhadas.value)
      );
    }
  }

  onSubmit() {

  }



  impedirValoresNegativos() {
    this.formulario.get('horasTrabalhadas').valueChanges
      .pipe(
        map(valor => {
          if (valor < 0) {
            this.formulario.get('horasTrabalhadas').setValue(0);
          }})).subscribe();

    this.formulario.get('conclusao').valueChanges
      .pipe(
        map(valor => {
          if (valor < 0 || valor > 100) { // Limita os valores entre 100 e 0, e já substitui os valores incorretos
            this.formulario.get('conclusao').setValue(valor < 0 ? 0 : 100);
          }})).subscribe();

  }

}
