import { Component, OnInit, Input } from '@angular/core';

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


  ngOnInit() {
  }

  onConfirmModal() {
    this.component.onConfirmModal();
  }

}
