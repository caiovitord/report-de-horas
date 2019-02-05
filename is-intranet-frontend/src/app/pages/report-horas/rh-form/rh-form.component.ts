import { Component, OnInit, ComponentRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RequisitesService } from '../../../shared/services/requisites.service';
import { DevelopersService } from '../../../shared/services/developers.service';
import { QuantidadeFormsService } from '../services/quantidade-forms.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-rh-form',
  templateUrl: './rh-form.component.html',
  styleUrls: ['./rh-form.component.css'],

  animations: [
    trigger('fadeInOut', [
      state('fadeIn', style({
        opacity: 1
      })),
      state('fadeOut', style({
        opacity: 0
      })),
      transition('fadeIn => fadeOut', [
        animate('0.3s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('0.3s')
      ]),
    ]),
  ]

})
export class RhFormComponent implements OnInit {

  public formulario: FormGroup;

  idRequisitoSelecionado: number;

  requisitos$: Observable<any>;

  desenvolvedores$: any;
  area: any;

  public destruir  = false;

  public formNumber: number;

  constructor(
    private formBuilder: FormBuilder,
    private devService: DevelopersService,
    private requisitoService: RequisitesService,
    private qtdFormsService: QuantidadeFormsService,
    ) { }



  ngOnInit() {

    this.formNumber = this.qtdFormsService.quantidadeDeFormularios;

    this.requisitos$ = this.requisitoService.getRequisitos();
    this.desenvolvedores$ = this.devService.getDevelopers();
    this.area = this.devService.getArea();

      this.formulario = this.formBuilder.group({
        requisito: [null, [Validators.required]],
        desenvolvedor: [null, [Validators.required]],
        area: [null, [Validators.required]],
        horasTrabalhadas: [null, [Validators.required, Validators.min(0.1)]],
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

  verifyValidTouched(nomeCampo) {
    const formControl  = this.formulario.get(nomeCampo);

    return formControl.touched && formControl.invalid;
  }



  onPorcentagemConclusaoChanged(valor: number) {
    const formConclusao = this.formulario.get('conclusao');

    // Garante que o valor sempre será multiplo de 10
    // console.log(valor);
    // Se o resto for zero, é multiplo de 10
    const restoZero = (valor / 10) % 1;

    if (restoZero !== 0) {
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
      formHorasTrabalhadas.setValue(
        Math.ceil(formHorasTrabalhadas.value)
      );
    }
  }

  onAddRequisito() {

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
