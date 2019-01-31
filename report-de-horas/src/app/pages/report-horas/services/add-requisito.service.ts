import { FormGroup } from '@angular/forms';
import { RhFormComponent } from './../rh-form/rh-form.component';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ComponentRef } from '@angular/core/src/render3';
import { RhContainerComponent } from '../rh-pagina/rh-container/rh-container.component';

@Injectable({
  providedIn: 'root'
})
export class AddRequisitoService {

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  createAnotherForm(viewContainerRef: ViewContainerRef): any {
    const componentFactory = this.factoryResolver.resolveComponentFactory(RhFormComponent);
    //viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    return componentRef;
  }




}
