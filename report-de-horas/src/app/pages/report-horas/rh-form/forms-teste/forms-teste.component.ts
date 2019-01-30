import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../serviços/servico.service';



@Component({
  selector: 'app-forms-teste',
  templateUrl: './forms-teste.component.html',
  styleUrls: ['./forms-teste.component.css']
})
export class FormsTesteComponent implements OnInit {

  formulario: FormGroup;
  cargos: any;
  area: any;

  constructor(private formBuilder:FormBuilder,
    private services: ServicosService,
  ){}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cargo: [null, [Validators.required]],
      area: [null, [Validators.required]]

    });

    this.cargos = this.services.getCargos();
    this.area = this.services.getArea();
  }

}
