import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';
import { RemoveRequisiteService } from '../services/remove-requisite.service';

@Component({
  selector: 'app-btn-remove-requisite',
  templateUrl: './btn-remove-requisite.component.html',
  styleUrls: ['./btn-remove-requisite.component.css']
})
export class BtnRemoveRequisiteComponent implements OnInit {

  @Input() rhFormComponent: RhFormComponent;

  constructor(
    private removeRequisiteService: RemoveRequisiteService) { }

  ngOnInit() {

  }

  destroyClick() {
    this.removeRequisiteService.deleteForm(this.rhFormComponent.formNumber);
  }

}
