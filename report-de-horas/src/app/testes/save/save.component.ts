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


  }


}
