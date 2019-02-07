import { ServerResponseService } from './../services/server-response.service';
import { Component, OnInit, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { map, delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-server-response',
  templateUrl: './server-response.component.html',
  styleUrls: ['./server-response.component.css'],

  animations: [
    trigger('fadeInOut', [
      // ...
      state('fadeIn', style({
        height: '55px',
        opacity: 1
      })),
      state('fadeOut', style({
        height: '0px',
        opacity: 0
      })),
      transition('fadeIn => fadeOut', [
        animate('0.3s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('0.3s')
      ]),
    ]),
    trigger('fadeInOutIcon', [
      // ...
      state('fadeIn', style({
        opacity: 1
      })),
      state('fadeOut', style({
        opacity: 0
      })),
      transition('fadeIn => fadeOut', [
        animate('0.3s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('0.3s')
      ]),
    ]),
  ]
})
export class ServerResponseComponent implements OnInit, OnDestroy {


  @ViewChild('messageDiv') messageDiv: ElementRef;
  @Input() sucessMessage: string;

  show = false;
  showOkIcon = false;
  goAway = true;

  message = 'Aguarde...';

  subscription: Subscription;
  error: boolean;

  constructor(
    private serverResponseService: ServerResponseService
  ) { }

  ngOnInit() {
    this.subscription = this.serverResponseService.responseEventEmitter
    .pipe(
      map(response => this.receiveResponse(response))
    )
    .subscribe();
  }

  receiveResponse(response): any {
    // console.log("Recebi resposta");
    // console.log(response);

    if (response === 'start') {
      this.startWaitingResponse();
      return;
    }

    if (response.message) {
      this.message = response.message;
      this.error = true;
      this.showOkIcon = false;
      return;

    }


    if (response.status && response.status === 200) {
      this.showOkIcon = true;
      this.message = this.sucessMessage;


    } else {
      this.error = true;
      this.showOkIcon = false;
      this.message = 'Oops... Algo de errado não está certo';

    }
  }
  startWaitingResponse(): any {
    this.show = true;
    this.goAway = false;
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async reset() {
    await this.delay(4000);
    this.show = false;
    await this.delay(400);
    this.error = false;
    this.showOkIcon = false;
    this.goAway = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
