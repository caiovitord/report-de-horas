import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';
import { DeleteRequisiteService } from '../services/delete-requisite.service';

@Component({
  selector: 'app-btn-remove-requisite',
  templateUrl: './btn-remove-requisite.component.html',
  styleUrls: ['./btn-remove-requisite.component.css']
})
export class BtnRemoveRequisiteComponent implements OnInit {

  @Input() rhFormComponent: RhFormComponent;

  constructor(
    private deleteRequisiteService: DeleteRequisiteService) { }

  ngOnInit() {

  }

  destroyClick() {
    this.deleteRequisiteService.deleteForm(this.rhFormComponent.formNumber);
  }

}
