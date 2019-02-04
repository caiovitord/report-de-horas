import { QuantidadeFormsService } from './quantidade-forms.service';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';

@Injectable({
  providedIn: 'root'
})
export class AddRequisiteFormService {


  public formComponents: RhFormComponent[] = [];

  constructor(
    private qtdFormsService: QuantidadeFormsService,
    private factoryResolver: ComponentFactoryResolver) {
  }

 removeComponent(): any {
    this.formComponents.pop();
  }


  createAnotherForm(viewContainerRef: ViewContainerRef): any {
    this.qtdFormsService.quantidadeDeFormularios++;
    const componentFactory = this.factoryResolver.resolveComponentFactory(RhFormComponent);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    return componentRef;
  }




}
