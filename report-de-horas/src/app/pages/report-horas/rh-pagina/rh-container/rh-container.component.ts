import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-rh-container',
  template: ''
})
export class RhContainerComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
