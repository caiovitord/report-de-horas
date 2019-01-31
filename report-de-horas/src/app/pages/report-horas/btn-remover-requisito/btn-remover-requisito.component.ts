import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';
import { DeleteRequisitoService } from '../services/delete-requisito.service';

@Component({
  selector: 'app-btn-remover-requisito',
  templateUrl: './btn-remover-requisito.component.html',
  styleUrls: ['./btn-remover-requisito.component.css']
})
export class BtnRemoverRequisitoComponent implements OnInit {

  @Input() rhFormComponent: RhFormComponent;

  constructor(
    private deleteRequisitoService: DeleteRequisitoService) { }

  ngOnInit() {

  }

  destroyClick() {
    this.deleteRequisitoService.deleteForm(this.rhFormComponent.formNumber);
  }

}
