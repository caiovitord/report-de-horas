import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-save-teste',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  formulario: FormGroup;



  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      inputText: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(1500)]]
    });
  }

  onSubmit() {
    const texto = this.formulario.get('inputText').value;
    const FileSaver = require('file-saver');
    const blob = new Blob([texto], {type: 'text/csv;charset=utf-8'});
    FileSaver.saveAs(blob, 'Seu arquivo.csv');

  }


}
