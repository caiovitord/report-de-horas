import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';

@Component({
  selector: 'app-btn-remover-requisito',
  templateUrl: './btn-remover-requisito.component.html',
  styleUrls: ['./btn-remover-requisito.component.css']
})
export class BtnRemoverRequisitoComponent implements OnInit {

  @Input() rhFormComponent: RhFormComponent;

  constructor() { }

  ngOnInit() {

  }

  destroyClick() {

  }

}
