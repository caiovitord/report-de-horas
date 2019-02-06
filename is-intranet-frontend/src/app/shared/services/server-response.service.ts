import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerResponseService {

  private response;

  public responseEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }


  setResponse (response) {
    this.response = response;
    this.responseEventEmitter.emit(response);
  }


  startResponse() {
    this.responseEventEmitter.emit('start');
  }

}
