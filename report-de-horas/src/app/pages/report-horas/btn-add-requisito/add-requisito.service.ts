import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRequisitoService {

  rootViewContainer: any;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

}
