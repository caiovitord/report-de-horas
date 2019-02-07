import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MoreDataTableComponent } from './more-data-table/more-data-table.component';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() smallInfo: string;
  @Input() info: string;
  @Input() confirmButtonText: string;
  @Input() cancelButtonText: string;
  @Input() component: any;
  @Input() modalId: string;
  @Input() callBackResolver: number;
  @Input() showCancelButton = true;
  @Input() showTableData = false;

  @ViewChild('moreDataTableComponent') moreDataTableComponent: MoreDataTableComponent;


  ngOnInit() {
  }

  onConfirmModal() {
    this.component.onConfirmModal(this.callBackResolver);
  }

}
