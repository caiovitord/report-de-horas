import { Component, OnInit, Input } from '@angular/core';



import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css'],

  animations: [
    trigger('fadeInOut', [
      // ...
      state('fadeIn', style({
        height: '60px',
        opacity: 1
      })),
      state('fadeOut', style({
        height: '0px',
        opacity: 0
      })),
      transition('fadeIn => fadeOut', [
        animate('0.2s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('0.2s')
      ]),
    ]),
  ]

})
export class ErrorMsgComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;


//  @Input() control: FormControl;
// @Input() label: string;

  constructor() { }

  ngOnInit() {
  }
/*
  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }

    return null;
  }
*/
}
