import { AddRequisitoService } from './add-requisito.service';
import { Injectable, ComponentRef } from '@angular/core';
import { RhFormComponent } from '../rh-form/rh-form.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteRequisitoService {

  public dynamicFormComponentRef: ComponentRef<RhFormComponent>[] = [];

  deleteForm(formNumber: number) {
    const index = formNumber - 2; // Menos um por que não conta o primeiro form, e menos um novamente por que é zero based
    this.dynamicFormComponentRef[index].destroy();
    this.addRequisitoService.removeComponent();

  }

  constructor( private addRequisitoService: AddRequisitoService) { }
}
