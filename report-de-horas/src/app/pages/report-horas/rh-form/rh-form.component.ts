import { CsvGeneratorService } from './../services/csv-generator.service';
import { Component, OnInit, ViewContainerRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RequisitoService } from '../services/requisitos.service';
import { DesenvolvedoresService } from '../services/desenvolvedores.service';


@Component({
  selector: 'app-rh-form',
  templateUrl: './rh-form.component.html',
  styleUrls: ['./rh-form.component.css']

})
export class RhFormComponent implements OnInit {

  public formulario: FormGroup;

  idRequisitoSelecionado: number;

  requisitos$: Observable<any>;

  desenvolvedores: any;
  area: any;

  constructor(
    private formBuilder: FormBuilder,
    private devService: DesenvolvedoresService,
    private requisitoService: RequisitoService,
    private viewContainerRef: ViewContainerRef,
    private gerarCsvService: CsvGeneratorService,
    private elem: ElementRef
    ) { }



  ngOnInit() {


    this.requisitos$ = this.requisitoService.getRequisitos();
    this.desenvolvedores = this.devService.getCargos();
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

  verificaValidTouched(nomeCampo) {
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
